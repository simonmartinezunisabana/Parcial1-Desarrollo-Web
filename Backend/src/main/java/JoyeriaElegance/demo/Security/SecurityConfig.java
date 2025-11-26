package JoyeriaElegance.demo.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // ← así se desactiva CSRF ahora
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll()
                ); // Permite todos los endpoints
        return http.build();
    }
}
