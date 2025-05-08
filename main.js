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
        const telefono = "573169478779";
        window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, "_blank");
      });
    } else {
      console.error("No se encontró el botón de WhatsApp.");
    }
  });

  let index = 0;
  const images = document.querySelectorAll(".carrusel-img");

  setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 15000); // 15 segundos

  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      item.classList.toggle('active');
    });
  });
  