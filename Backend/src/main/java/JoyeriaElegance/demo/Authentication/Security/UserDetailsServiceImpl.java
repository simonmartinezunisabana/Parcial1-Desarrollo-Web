package JoyeriaElegance.demo.Authentication.Security;

import JoyeriaElegance.demo.Authentication.Entities.Usuario;
import JoyeriaElegance.demo.Authentication.Repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return User.builder()
            .username(usuario.getUsername())
            .password(usuario.getPassword())
            .build();
    }

}
