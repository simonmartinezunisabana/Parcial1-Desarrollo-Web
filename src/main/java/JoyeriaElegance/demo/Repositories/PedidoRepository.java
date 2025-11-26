package JoyeriaElegance.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import JoyeriaElegance.demo.Entities.Pedido;

import java.util.List;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Integer> {
    List<Pedido> findByNombreStartingWith(String nombre);

    List<Pedido> findByEstado(boolean estado);

    List<Pedido> findByNombreStartingWithAndEstado(String nombre, boolean estado);
}