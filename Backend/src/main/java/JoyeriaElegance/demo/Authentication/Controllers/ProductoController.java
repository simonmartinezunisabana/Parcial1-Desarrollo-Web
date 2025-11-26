package JoyeriaElegance.demo.Authentication.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.persistence.EntityNotFoundException;

import java.util.List;
import java.util.Objects;

import JoyeriaElegance.demo.Authentication.Entities.Producto;
import JoyeriaElegance.demo.Authentication.Repositories.ProductoRepository;

@RestController
@RequestMapping("/productos")
public class ProductoController {

    @Autowired
    private ProductoRepository productoRepo;

    // ---- GET: listar todos los productos ----
    @GetMapping
    public List<Producto> fetchProductoList() {
        return (List<Producto>) productoRepo.findAll();
    }

    // ---- GET: obtener producto por id ----
    @GetMapping("/{id}")
    public ResponseEntity<Producto> fetchProducto(@PathVariable Integer id) {
        Producto producto = productoRepo.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Producto no encontrado"));
        return ResponseEntity.ok(producto);
    }

    // ---- POST: crear producto ----
    @PostMapping
    public Producto saveProducto(@RequestBody Producto producto) {
        return productoRepo.save(producto);
    }

    // ---- PUT: actualizar producto ----
    @PutMapping("/{id}")
    public ResponseEntity<Producto> updateProducto(@RequestBody Producto nuevoProducto, @PathVariable Integer id) {
        Producto producto = productoRepo.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Producto no encontrado"));

        // Validar y actualizar campos uno por uno
        if (Objects.nonNull(nuevoProducto.getNombre()) && !nuevoProducto.getNombre().isBlank()) {
            producto.setNombre(nuevoProducto.getNombre());
        }
        if (Objects.nonNull(nuevoProducto.getPrecio())) {
            producto.setPrecio(nuevoProducto.getPrecio());
        }
        if (Objects.nonNull(nuevoProducto.getImagen()) && !nuevoProducto.getImagen().isBlank()) {
            producto.setImagen(nuevoProducto.getImagen());
        }
        if (Objects.nonNull(nuevoProducto.getTipo()) && !nuevoProducto.getTipo().isBlank()) {
            producto.setTipo(nuevoProducto.getTipo());
        }
        if (Objects.nonNull(nuevoProducto.getDescripcion()) && !nuevoProducto.getDescripcion().isBlank()) {
            producto.setDescripcion(nuevoProducto.getDescripcion());
        }

        Producto actualizado = productoRepo.save(producto);
        return ResponseEntity.ok(actualizado);
    }

    // ---- DELETE: borrar producto ----
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProductoById(@PathVariable Integer id) {
        Producto producto = productoRepo.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Producto no encontrado"));

        productoRepo.delete(producto);
        return ResponseEntity.noContent().build();
    }
}
