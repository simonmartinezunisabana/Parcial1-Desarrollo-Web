package JoyeriaElegance.demo.DTOs;

import java.util.List;

public class PedidoRequest {
    public String nombre;
    public String correo;
    public String telefono;
    public String direccion;
    public String ciudad;
    public String codigo_postal;
    public Integer total;
    public List<ProductoRequest> productos;

    public PedidoRequest() {
    }

    public PedidoRequest(String nombre, String correo, String telefono, String direccion, String ciudad, String codigo_postal, Integer total, List<ProductoRequest> productos) {
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.codigo_postal = codigo_postal;
        this.total = total;
        this.productos = productos;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getCodigo_postal() {
        return codigo_postal;
    }

    public void setCodigo_postal(String codigo_postal) {
        this.codigo_postal = codigo_postal;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public List<ProductoRequest> getProductos() {
        return productos;
    }

    public void setProductos(List<ProductoRequest> productos) {
        this.productos = productos;
    }
}
