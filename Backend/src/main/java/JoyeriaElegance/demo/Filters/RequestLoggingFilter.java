package JoyeriaElegance.demo.Filters;

import JoyeriaElegance.demo.Entities.RequestLog;
import JoyeriaElegance.demo.Repositories.RequestLogRepository;
import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.LocalDateTime;

@Component
public class RequestLoggingFilter implements Filter {

    @Autowired
    private RequestLogRepository logRepository;

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) request;

        RequestLog log = new RequestLog();
        log.setMethod(req.getMethod());
        log.setPath(req.getRequestURI());
        log.setIp(req.getRemoteAddr());
        log.setTimestamp(LocalDateTime.now());

        logRepository.save(log);

        chain.doFilter(request, response);
    }
}