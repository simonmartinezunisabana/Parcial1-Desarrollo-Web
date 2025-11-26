package JoyeriaElegance.demo.Controllers;

import java.util.List;
import java.util.Objects;

import JoyeriaElegance.demo.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import JoyeriaElegance.demo.Entities.Usuario;
import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/usuarios")
public class UserController {
    @Autowired
    private UserRepository usuarioRepo;

    @GetMapping
    public List<Usuario> fetchUsuarioList() {
        return (List<Usuario>) usuarioRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> fetchUsuario(@PathVariable Integer id) {
        Usuario usuario = usuarioRepo.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Usuario no encontrado"));
        return ResponseEntity.ok(usuario);
    }

    @PostMapping
    public Usuario saveUsuario(@RequestBody Usuario usuario) {
        return usuarioRepo.save(usuario);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> updateUsuario(@RequestBody Usuario nuevoUsuario, @PathVariable Integer id){
        Usuario usuario = usuarioRepo.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Usuario no encontrado"));

        if (Objects.nonNull(nuevoUsuario.getUsername()) && !nuevoUsuario.getUsername().isBlank()) {
            usuario.setUsername(nuevoUsuario.getUsername());
        }
        if (Objects.nonNull(nuevoUsuario.getPassword()) && !nuevoUsuario.getPassword().isBlank()) {
            usuario.setPassword(nuevoUsuario.getPassword());
        }

        Usuario actualizado = usuarioRepo.save(usuario);
        return ResponseEntity.ok(actualizado);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUsuarioById(@PathVariable Integer id) {
        Usuario usuario = usuarioRepo.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Usuario no encontrado"));
        
        usuarioRepo.delete(usuario);
        return ResponseEntity.noContent().build();
    }
}
