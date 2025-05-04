// Foto del producto
const productImage = document.querySelector(".producto-imagen");
productImage.src = "./img/VANORAPRODUCT.png"; // Reemplaza por tu imagen

// Botón Mercado Pago
document.getElementById("mercadoPagoBtn").addEventListener("click", () => {
  window.open("https://mpago.li/1R3V6ND", "_blank");
});

// Botón WhatsApp
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("whatsappBtn");
    if (boton) {
      boton.addEventListener("click", () => {
        const mensaje = "Hola, quiero hacer un pedido del Producto Estrella.";
        const telefono = "573167246633";
        window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, "_blank");
      });
    } else {
      console.error("No se encontró el botón de WhatsApp.");
    }
  });
  
