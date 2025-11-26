document.addEventListener("DOMContentLoaded", () => {

  const token = localStorage.getItem("token");
  const usuarioGuardado = localStorage.getItem("usuario");

  // ========= SI YA HAY UNA SESIÓN ACTIVA =========
  if (token && usuarioGuardado) {
    mostrarMensajeSesionActiva(usuarioGuardado);
    return; // Evitar que se ejecute el login normal
  }

  // ========= MANEJO DEL LOGIN =========
  const form = document.getElementById("form-login");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const usuario = form.querySelector('input[name="usuario"]').value;
    const contraseña = form.querySelector('input[name="contraseña"]').value;

    const loader = document.getElementById("loaderPost");
    loader.style.display = "flex";

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: usuario,
          password: contraseña
        })
      });

      if (!response.ok) {
        alert("Credenciales incorrectas");
        loader.style.display = "none";
        return;
      }

      const data = await response.json();

      // Guardar token y usuario
      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", usuario);

      loader.style.display = "none";

      // Redirigir al index
      window.location.href = "index.html";

    } catch (error) {
      console.error("Error en login:", error);
      loader.style.display = "none";
    }
  });
});


// ========= FUNCIÓN: Mostrar mensaje si ya hay sesión activa =========
function mostrarMensajeSesionActiva(usuario) {
  document.querySelector(".login-form").innerHTML = `
    <h2>Ya has iniciado sesión</h2>
    <p>Actualmente estás conectado como <b>${usuario}</b>.</p>

    <button id="cerrar-sesion-btn" class="btn-logout">Cerrar sesión</button>
    <button onclick="window.location.href='index.html'" class="btn-continue">
      Continuar navegando
    </button>
  `;

  // Cerrar sesión
  document.getElementById("cerrar-sesion-btn").addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    window.location.reload(); // Recargar para mostrar el formulario otra vez
  });
}
