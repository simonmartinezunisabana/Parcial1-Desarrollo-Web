package JoyeriaElegance.demo.DTOs;

public class ProductoRequest {
    public Integer productoId;
    public Integer cantidad;

    public ProductoRequest() {
    }

    public ProductoRequest(Integer productoId, Integer cantidad) {
        this.productoId = productoId;
        this.cantidad = cantidad;
    }

    public Integer getProductoId() {
        return productoId;
    }

    public void setProductoId(Integer productoId) {
        this.productoId = productoId;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    @Override
    public String toString() {
        return "ProductoRequest{" +
                "productoId=" + productoId +
                ", cantidad=" + cantidad +
                '}';
    }
}
