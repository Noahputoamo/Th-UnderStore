/* TH-UNDER STORE
   JavaScript vanilla: catálogo, filtros, detalle de producto y bolsa de compras.
   Los productos y precios son demostrativos para el prototipo académico. */
"use strict";

const products = [
  { id: 1, name: "Pink Tussy", category: "playeras", categoryLabel: "Playera aerografiada", price: 500, artist: "Qui-Noah", artistId: 2, glow: "#843ED8", bg: "linear-gradient(140deg,#20134b,#07070d)", garment: "garment-shirt", label: "PINK<br>TUSSY", number: "DROP 001", description: "Modelo unico, estilo aerografia" },
  { id: 2, name: "KriKo", category: "playeras", categoryLabel: "Playera aerografiada", price: 500, artist: "Qui-Noah", artistId: 2, glow: "#0755F9", bg: "linear-gradient(140deg,#0b2458,#08080e)", garment: "garment-shirt", label: "KRIKO", number: "DROP 002", description: "Sudadera con una estética digital y contrastes eléctricos, pensada para destacar en cualquier combinación streetwear." },
  { id: 3, name: "Perla Satan", category: "accesorios", categoryLabel: "Gorra personalizada", price: 800, artist: "FerN YYY", artistId: 3, glow: "#D14D78", bg: "linear-gradient(140deg,#40172f,#07070d)", garment: "garment-hat", label: "PERLA<br>SATAN", number: "DROP 003", description: "Chamarra con inspiración gráfica y detalles visuales de alto contraste. Una pieza protagonista para looks urbanos." },
  { id: 4, name: "Panto Mofa", category: "patalones", categoryLabel: "Pantalon aerografiado", price: 1200, artist: "Qui-Noah", artistId: 2, glow: "#5497F1", bg: "linear-gradient(140deg,#102c4a,#08080d)", garment: "garment-pants", label: "PANTO<br>MOFA", number: "DROP 004", description: "Diseño de estética glitch que combina el lenguaje digital con la cultura de la calle." },
  { id: 5, name: "Underground Box", category: "pantalones", categoryLabel: "Pantalón intervenido", price: 1450, artist: "JanDro", artistId: 1, glow: "#843ED8", bg: "linear-gradient(140deg,#25204b,#07070d)", garment: "garment-pants", label: "UNDER<br>GROUND", number: "DROP 005", description: "Pantalón de estilo utilitario con una propuesta visual inspirada en el arte independiente." },
  { id: 6, name: "Goblin Rosa", category: "accesorios", categoryLabel: "Accesorio personalizado", price: 480, artist: "FerN YYY", artistId: 3, glow: "#D14D78", bg: "linear-gradient(140deg,#42182f,#07070d)", garment: "garment-accesory", label: "GOBLIN<br>PINK", number: "DROP 006", description: "Gorra de estética urbana. Consulta disponibilidad para solicitar una intervención personalizada." },
  { id: 7, name: "Ghastt", category: "sudaderas", categoryLabel: "Sudadera personalizado", price: 880, artist: "JanDro", artistId: 1, glow: "#D14D78", bg: "linear-gradient(140deg,#42182f,#07070d)", garment: "garment-accesory", label: "GHASTT", number: "DROP 007", description: "Sudadera personalizada de la franquicia Minecraft." },
  { id: 8, name: "Cargo Under", category: "pantalones", categoryLabel: "Pantalon custom", price: 1220, artist: "FerN YYY", artistId: 3, glow: "#D14D78", bg: "linear-gradient(140deg,#42182f,#07070d)", garment: "garment-accesory", label: "CARGO<br>UNDER", number: "DROP 008", description: "Pantalon custom edicion limitada." },
  { id: 9, name: "Papel China", category: "playeras", categoryLabel: "Playera personalizada", price: 800, artist: "FerN YYY", artistId: 3, glow: "#D14D78", bg: "linear-gradient(140deg,#42182f,#07070d)", garment: "garment-accesory", label: "PAPEL<br>CHINA", number: "DROP 009", description: "Playera estilo papel china edicion limitada." },
  { id: 10, name: "Bufa", category: "accesorios", categoryLabel: "Gorra personalizada", price: 400, artist: "JanDro", artistId: 1, glow: "#D14D78", bg: "linear-gradient(140deg,#42182f,#07070d)", garment: "garment-accesory", label: "BUFA", number: "DROP 010", description: "Gorr urbana Bufa edicio especial Caramel." },
  { id: 11, name: "La Maquina", category: "playeras", categoryLabel: "Playera aerografiada", price: 500, artist: "Qui-Noah", artistId: 2, glow: "#D14D78", bg: "linear-gradient(140deg,#42182f,#07070d)", garment: "garment-accesory", label: "LA<br>MAQUINA", number: "DROP 011", description: "Modelo unico, estilo aerografia." },
  { id: 12, name: "Caramel Polo", category: "playeras", categoryLabel: "Playera under", price: 400, artist: "JanDro", artistId: 1, glow: "#D14D78", bg: "linear-gradient(140deg,#42182f,#07070d)", garment: "garment-accesory", label: "CARAMEL<br>POLO", number: "DROP 012", description: "Modelo unico, estilo UNDER." },
  { id: 13, name: "Kitty la mas Grande", category: "sudaderas", categoryLabel: "Sudadera aerografiada", price: 900, artist: "Qui-Noah", artistId: 2, glow: "#D14D78", bg: "linear-gradient(140deg,#42182f,#07070d)", garment: "garment-accesory", label: "KITTY", number: "DROP 013", description: "Modelo unico, estilo aerografia." }
];

const artists = [
  { id: 1, name: "Qui-Noah", style: "AEROGRAFÍA · CHUGG", initials: "NX", color: "#843ED8", bio: "Inspiración callejera, tipografía expresiva y energía gráfica de la cultura independiente." },
  { id: 2, name: "JanDro", style: "GRAFITTI · AEROGRAFIA CHUGG", initials: "K4", color: "#0755F9", bio: "Composiciones oscuras, trazos intensos y una mirada experimental del streetwear." },
  { id: 3, name: "FerN YYY", style: "URBANO · OVER SIZE", initials: "M0", color: "#D14D78", bio: "Universos digitales, estética glitch y contrastes eléctricos en cada intervención." }
];

// Las rutas de las imágenes se editan en el HTML, no en este archivo.
// Las <template> de productos y artistas están junto a sus secciones.
function photoFromHTML(templateId, id) {
  const template = document.getElementById(templateId);
  const item = template && template.content.querySelector(`img[data-id="${id}"]`);
  return item ? item.getAttribute("src")?.trim() || "" : "";
}
products.forEach(product => {
  product.image = photoFromHTML("imagenes-productos", product.id);
});
artists.forEach(artist => {
  artist.image = photoFromHTML("imagenes-artistas", artist.id);
});

// Evita el ícono de imagen rota y recupera el dibujo o las iniciales.
document.addEventListener("error", event => {
  if (event.target.matches?.(".product-photo, .artist-photo, .cart-photo")) {
    event.target.remove();
  }
}, true);

function imageTag(src, alt, className) {
  if (!src) return "";
  const safe = value => String(value)
    .replaceAll("&", "&amp;").replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  return `<img class="${className}" src="${safe(src)}" alt="${safe(alt)}" loading="lazy">`;
}

const productGrid = document.getElementById("productGrid");
const artistGrid = document.getElementById("artistGrid");
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsContainer = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotalItems = document.getElementById("cartTotalItems");
const cartSubtotal = document.getElementById("cartSubtotal");
const toastElement = document.getElementById("siteToast");
const toast = window.bootstrap ? new bootstrap.Toast(toastElement, { delay: 2600 }) : null;
let cart = [];
let selectedProductId = null;
let activeFilter = "todos";
let showingAllProducts = false;

function formatPrice(value) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(value) + " MXN";
}
function garmentMarkup(product) {
  // El dibujo queda como respaldo si todavía no han agregado la fotografía.
  return `<div class="garment ${product.garment}" aria-hidden="true" style="--art-glow:${product.glow}"></div>`
    + imageTag(product.image, product.name, "product-photo");
}
function productCard(product, index) {
  return `
    <div class="col">
      <article class="product-card">
        <button class="product-art w-100 border-0" style="--art-bg:${product.bg};--art-glow:${product.glow}" data-open-product="${product.id}" aria-label="Ver ${product.name}">
          <span class="art-number">${product.number}</span>
          ${garmentMarkup(product)}
          <span class="art-label">${product.label}</span>
        </button>
        <div class="product-info">
          <div class="product-meta"><span>${product.categoryLabel}</span><span>TH—${String(index + 1).padStart(2, "0")}</span></div>
          <h3>${product.name}</h3>
          <div class="product-meta"><span>Por ${product.artist}</span><span>Edición de artista</span></div>
          <div class="product-bottom"><span class="product-price">${formatPrice(product.price)}</span><button class="product-add" data-add-product="${product.id}" aria-label="Agregar ${product.name} a la bolsa">+</button></div>
          <button class="product-open" data-open-product="${product.id}">Ver detalles de la pieza ↗</button>
        </div>
      </article>
    </div>`;
}
function renderProducts() {
  let list = products.filter(p => activeFilter === "todos" || p.category === activeFilter);
  if (!showingAllProducts && activeFilter === "todos") list = list.slice(0, 4);
  productGrid.innerHTML = list.map(productCard).join("");
  document.getElementById("showAllProducts").textContent = showingAllProducts ? "Mostrar destacados ↑" : "Ver colección completa ↗";
  document.getElementById("showAllProducts").hidden = activeFilter !== "todos";
}
function renderArtists() {
  artistGrid.innerHTML = artists.map((artist, index) => `
    <div class="col-md-4">
      <article class="artist-card">
        <div class="artist-portrait" style="--artist-color:${artist.color}">
          <span class="artist-initials">${artist.initials}</span>
          ${imageTag(artist.image, artist.name, "artist-photo")}
          <span class="artist-index">ARTISTA / 0${index + 1}</span>
        </div>
        <div class="artist-info"><small>${artist.style}</small><h3>${artist.name}</h3><p>${artist.bio}</p><button class="artist-link" data-artist="${artist.id}">México</button></div>
      </article>
    </div>`).join("");
}
function showToast(message) {
  document.getElementById("toastMessage").textContent = message;
  if (toast) toast.show();
}
function addToCart(productId, size = "M") {
  const product = products.find(p => p.id === Number(productId));
  if (!product) return;
  const existing = cart.find(item => item.productId === product.id && item.size === size);
  if (existing) existing.quantity += 1;
  else cart.push({ productId: product.id, size, quantity: 1 });
  renderCart();
  showToast(`${product.name} se agregó a tu bolsa.`);
}
function renderCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
  cartCount.textContent = totalItems;
  cartTotalItems.textContent = `(${totalItems})`;
  cartSubtotal.textContent = formatPrice(subtotal);
  if (!cart.length) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">Tu bolsa está vacía.<br>Encuentra una pieza que hable por ti.</p>';
    return;
  }
  cartItemsContainer.innerHTML = cart.map((item, index) => {
    const product = products.find(p => p.id === item.productId);
    return `<article class="cart-item">
      <div class="cart-thumb" style="--thumb-bg:${product.bg}">TH${imageTag(product.image, product.name, "cart-photo")}</div>
      <div><h3>${product.name}</h3><p>Talla ${item.size} · Cantidad ${item.quantity}</p><button class="remove-item" data-remove-item="${index}">Eliminar</button></div>
      <span class="cart-item-price">${formatPrice(product.price * item.quantity)}</span>
    </article>`;
  }).join("");
}
function openCart() {
  cartOverlay.classList.add("open");
  cartOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("closeCart").focus();
}
function closeCart() {
  cartOverlay.classList.remove("open");
  cartOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  document.getElementById("openCart").focus();
}
function openProduct(productId) {
  const product = products.find(p => p.id === Number(productId));
  if (!product) return;
  selectedProductId = product.id;
  document.getElementById("modalCategory").textContent = product.categoryLabel.toUpperCase();
  document.getElementById("productModalTitle").textContent = product.name;
  document.getElementById("modalArtist").textContent = `Creado por ${product.artist}`;
  document.getElementById("modalPrice").textContent = formatPrice(product.price);
  document.getElementById("modalDescription").textContent = product.description;
  document.getElementById("modalArt").style.setProperty("--modal-glow", product.glow);
  document.getElementById("modalArt").innerHTML = garmentMarkup(product) + `<span class="art-label">${product.label}</span>`;
  bootstrap.Modal.getOrCreateInstance(document.getElementById("productModal")).show();
}

document.querySelectorAll(".filter-chip").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    showingAllProducts = false;
    renderProducts();
  });
});
document.getElementById("showAllProducts").addEventListener("click", () => {
  showingAllProducts = !showingAllProducts;
  renderProducts();
});
document.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add-product]");
  const openButton = event.target.closest("[data-open-product]");
  const artistButton = event.target.closest("[data-artist]");
  const removeButton = event.target.closest("[data-remove-item]");
  if (addButton) addToCart(addButton.dataset.addProduct);
  if (openButton) openProduct(openButton.dataset.openProduct);
  if (artistButton) {
    activeFilter = "todos";
    showingAllProducts = true;
    document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("active", chip.dataset.filter === "todos"));
    renderProducts();
    document.getElementById("tienda").scrollIntoView({ behavior: "smooth" });
    showToast(`Mostrando la colección de ${artists.find(a => a.id === Number(artistButton.dataset.artist)).name}.`);
  }
  if (removeButton) {
    cart.splice(Number(removeButton.dataset.removeItem), 1);
    renderCart();
  }
});
document.getElementById("modalAddToCart").addEventListener("click", () => {
  if (selectedProductId !== null) {
    addToCart(selectedProductId, document.getElementById("productSize").value);
    bootstrap.Modal.getOrCreateInstance(document.getElementById("productModal")).hide();
    openCart();
  }
});
document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", event => { if (event.target === cartOverlay) closeCart(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && cartOverlay.classList.contains("open")) closeCart(); });
document.getElementById("checkoutButton").addEventListener("click", () => {
  if (!cart.length) {
    showToast("Tu bolsa está vacía. Agrega una pieza antes de continuar.");
    return;
  }
  showToast("Prototipo académico: aquí se conectaría la confirmación del pedido y el pago.");
});
document.querySelectorAll("#mainNav .nav-link").forEach(link => link.addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  if (nav.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(nav).hide();
}));
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
renderArtists();
renderCart();
