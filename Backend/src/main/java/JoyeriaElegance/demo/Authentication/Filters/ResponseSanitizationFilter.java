package JoyeriaElegance.demo.Authentication.Filters;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.web.util.ContentCachingResponseWrapper;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Iterator;

@Component
public class ResponseSanitizationFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        ContentCachingResponseWrapper wrappedResponse =
                new ContentCachingResponseWrapper((HttpServletResponse) response);

        chain.doFilter(request, wrappedResponse);

        String responseBody = new String(wrappedResponse.getContentAsByteArray(), StandardCharsets.UTF_8);
        String sanitized = sanitizeJson(responseBody);

        wrappedResponse.resetBuffer(); 
        wrappedResponse.getWriter().write(sanitized);
        wrappedResponse.copyBodyToResponse(); 
    }

    private String sanitizeJson(String json) {
        if (json == null || json.isBlank()) {
            return json;
        }

        json = json.trim();

        try {
            if (json.startsWith("{")) {
                JSONObject jsonObject = new JSONObject(json);
                removeIdAttributes(jsonObject);
                return jsonObject.toString();
            } else if (json.startsWith("[")) {
                JSONArray jsonArray = new JSONArray(json);
                for (int i = 0; i < jsonArray.length(); i++) {
                    Object element = jsonArray.get(i);
                    if (element instanceof JSONObject) {
                        removeIdAttributes((JSONObject) element);
                    }
                }
                return jsonArray.toString();
            } else {
                return json;
            }
        } catch (Exception e) {
            return json;
        }
    }

    private void removeIdAttributes(JSONObject jsonObject) {
        Iterator<String> keys = jsonObject.keys();
        while (keys.hasNext()) {
            String key = keys.next();
            if (key.endsWith("id")) {
                keys.remove();
            } else if (jsonObject.get(key) instanceof JSONObject) {
                removeIdAttributes(jsonObject.getJSONObject(key));
            } else if (jsonObject.get(key) instanceof JSONArray) {
                JSONArray arr = jsonObject.getJSONArray(key);
                for (int i = 0; i < arr.length(); i++) {
                    if (arr.get(i) instanceof JSONObject) {
                        removeIdAttributes(arr.getJSONObject(i));
                    }
                }
            }
        }
    }
}
