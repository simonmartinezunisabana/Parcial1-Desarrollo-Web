package JoyeriaElegance.demo.Controllers;

import JoyeriaElegance.demo.DTOs.PedidoRequest;
import JoyeriaElegance.demo.DTOs.ProductoRequest;
import JoyeriaElegance.demo.Entities.Pedido;
import JoyeriaElegance.demo.Entities.PedidoProducto;
import JoyeriaElegance.demo.Entities.Producto;
import JoyeriaElegance.demo.Repositories.PedidoProductoRepository;
import JoyeriaElegance.demo.Repositories.ProductoRepository;
import org.antlr.v4.runtime.misc.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.persistence.EntityNotFoundException;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import JoyeriaElegance.demo.Entities.Pedido;
import JoyeriaElegance.demo.Repositories.PedidoRepository;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {

    @Autowired
    private PedidoRepository pedidoRepo;

    @Autowired
    private ProductoRepository productoRepo;

    @Autowired
    private PedidoProductoRepository pedidoProductoRepo;

    // ---- GET: listar todos los pedidos ----
    @GetMapping
    public List<Pedido> fetchPedidoList(@RequestParam(required = false) String filter, @RequestParam(required = false) String search) {
        if(Objects.nonNull(filter) && Objects.nonNull(search)) {
            return (List<Pedido>) pedidoRepo.findByNombreStartingWithAndEstado(search, (filter.equalsIgnoreCase("completados")));
        }else if(Objects.nonNull(filter)){
            return (List<Pedido>) pedidoRepo.findByEstado(filter.equalsIgnoreCase("completados"));
        }else if(Objects.nonNull(search)){
            return (List<Pedido>) pedidoRepo.findByNombreStartingWith(search);
        }else{
            return (List<Pedido>) pedidoRepo.findAll();
        }
    }

    // ---- PUT: actualizar pedido ----
    @PutMapping("/{id}")
    public ResponseEntity<Pedido> updatePedido(@RequestBody Pedido nuevoPedido, @PathVariable Integer id) {
        Pedido pedido = pedidoRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Pedido no encontrado"));

        if (Objects.nonNull(nuevoPedido.getNombre()) && !nuevoPedido.getNombre().isBlank()) {
            pedido.setNombre(nuevoPedido.getNombre());
        }
        if (Objects.nonNull(nuevoPedido.getCorreo()) && !nuevoPedido.getCorreo().isBlank()) {
            pedido.setCorreo(nuevoPedido.getCorreo());
        }
        if (Objects.nonNull(nuevoPedido.getTelefono()) && !nuevoPedido.getTelefono().isBlank()) {
            pedido.setTelefono(nuevoPedido.getTelefono());
        }
        if (Objects.nonNull(nuevoPedido.getDireccion()) && !nuevoPedido.getDireccion().isBlank()) {
            pedido.setDireccion(nuevoPedido.getDireccion());
        }
        if (Objects.nonNull(nuevoPedido.getCiudad()) && !nuevoPedido.getCiudad().isBlank()) {
            pedido.setCiudad(nuevoPedido.getCiudad());
        }
        if (Objects.nonNull(nuevoPedido.getCodigo_postal()) && !nuevoPedido.getCodigo_postal().isBlank()) {
            pedido.setCodigo_postal(nuevoPedido.getCodigo_postal());
        }
        pedido.setEstado(nuevoPedido.getEstado());

        Pedido actualizado = pedidoRepo.save(pedido);
        return ResponseEntity.ok(actualizado);
    }

    // ---- POST: crear pedido ----
    @PostMapping
    public Pedido crearPedido(@RequestBody PedidoRequest request) {
        Pedido pedido = new Pedido();
        pedido.setNombre(request.getNombre());
        pedido.setCorreo(request.getCorreo());
        pedido.setTelefono(request.getTelefono());
        pedido.setDireccion(request.getDireccion());
        pedido.setCiudad(request.getCiudad());
        pedido.setCodigo_postal(request.getCodigo_postal());
        pedido.setTotal(request.getTotal());
        pedido.setEstado(false);

        Pedido pedidoGuardado = pedidoRepo.save(pedido);
        System.out.println(request.getProductos());

        for (ProductoRequest pr : request.getProductos()) {
            Producto producto = productoRepo.findById(pr.getProductoId())
                    .orElseThrow(() -> new RuntimeException("Producto no encontrado"));
            System.out.println(producto.getId());
            PedidoProducto pp = new PedidoProducto();
            pp.setProducto(producto);
            pp.setCantidad(pr.getCantidad());
            pp.setPedido(pedidoGuardado);

            pedidoGuardado.getProductos().add(pp);
        }

        return pedidoRepo.save(pedidoGuardado);
    }
}