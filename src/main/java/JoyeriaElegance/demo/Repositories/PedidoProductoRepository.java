package JoyeriaElegance.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import JoyeriaElegance.demo.Entities.PedidoProducto;

@Repository
public interface PedidoProductoRepository extends JpaRepository<PedidoProducto, Integer> {

}
