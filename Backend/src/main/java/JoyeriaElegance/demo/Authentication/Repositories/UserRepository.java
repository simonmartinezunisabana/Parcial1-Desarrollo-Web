package JoyeriaElegance.demo.Authentication.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import JoyeriaElegance.demo.Authentication.Entities.Usuario;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Usuario, Integer> {
    Optional<Usuario> findByUsername(String username);

    Boolean existsByUsername(String username);
}
