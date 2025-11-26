package JoyeriaElegance.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import JoyeriaElegance.demo.Entities.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {

}
