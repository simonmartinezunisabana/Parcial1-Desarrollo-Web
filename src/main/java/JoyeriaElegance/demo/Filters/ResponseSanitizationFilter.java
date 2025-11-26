package JoyeriaElegance.demo.Filters;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.web.util.ContentCachingResponseWrapper;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

@Component
public class ResponseSanitizationFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        ContentCachingResponseWrapper wrappedResponse =
                new ContentCachingResponseWrapper((HttpServletResponse) response);

        chain.doFilter(request, wrappedResponse);

        // Solo procesamos JSON real
        String contentType = wrappedResponse.getContentType();
        if (contentType == null || !contentType.contains("application/json")) {
            wrappedResponse.copyBodyToResponse();
            return;
        }

        String responseBody = new String(wrappedResponse.getContentAsByteArray(), StandardCharsets.UTF_8);

        String sanitized = sanitizeJsonSafe(responseBody);

        wrappedResponse.resetBuffer();
        wrappedResponse.getWriter().write(sanitized);
        wrappedResponse.copyBodyToResponse();
    }

    /**
     * Sanitiza JSON de forma segura: NO modifica estructura original,
     * NO rompe respuestas de PUT/PATCH, NO genera errores.
     */
    private String sanitizeJsonSafe(String json) {
        if (json == null || json.isBlank()) return json;

        json = json.trim();

        try {
            if (json.startsWith("{")) {
                JSONObject obj = new JSONObject(json);
                sanitizeObject(obj);
                return obj.toString();
            }

            if (json.startsWith("[")) {
                JSONArray arr = new JSONArray(json);
                for (int i = 0; i < arr.length(); i++) {
                    if (arr.get(i) instanceof JSONObject o) {
                        sanitizeObject(o);
                    }
                }
                return arr.toString();
            }

            return json;

        } catch (Exception e) {
            return json; // Si falla, devolvemos sin tocar
        }
    }

    /**
     * Elimina campos de ID solo en la RESPUESTA, sin alterar el body de entrada.
     * No usa iterador para evitar problemas de ConcurrentModification.
     */
    private void sanitizeObject(JSONObject obj) {

        // Guardamos las claves a eliminar para no modificar durante iteración
        JSONArray keysToRemove = new JSONArray();

        for (String key : obj.keySet()) {

            Object value = obj.get(key);

            // Condición para eliminar un ID en respuesta (pero NO IDs internos necesarios)
            if (key.equalsIgnoreCase("id")) {
                keysToRemove.put(key);
                continue;
            }

            if (value instanceof JSONObject) {
                sanitizeObject((JSONObject) value);
            } else if (value instanceof JSONArray arr) {
                for (int i = 0; i < arr.length(); i++) {
                    if (arr.get(i) instanceof JSONObject o) {
                        sanitizeObject(o);
                    }
                }
            }
        }

        // Eliminar claves seguras
        for (int i = 0; i < keysToRemove.length(); i++) {
            obj.remove(keysToRemove.getString(i));
        }
    }
}
