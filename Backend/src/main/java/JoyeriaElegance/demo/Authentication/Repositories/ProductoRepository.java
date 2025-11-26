package JoyeriaElegance.demo.Authentication.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import JoyeriaElegance.demo.Authentication.Entities.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {

}
