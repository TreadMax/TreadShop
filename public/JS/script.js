
const card = [];
let products = [];

const productGrid = document.querySelector("#product-grid");
const cartCountElement = document.querySelector("#cart-count");

function updateCartCount() {
  cartCountElement.textContent = card.length;
}
function renderProducts() {
  productGrid.innerHTML = products
    .map(function (product) {
      return `
      <article class="product-card">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p class="price">$${product.price.toFixed(2)}</p>
        <button data-id="${product.id}">Add to Cart"</button>
      </article>
    `;
    })
    .join("");

} 
productGrid.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-id]");
  if (!button) return;
  addToCart(Number(button.dataset.id));
});

async function loadProducts() {
  try {
    const response = await fetch("/api/products");
    if (!response.ok) {
      throw new Error('Failed to fetch products: ${response.status} ${response.statusText}');
    }
    products = await response.json();
    renderProducts();
  } catch (error) {
    console.error("could not fetch products:", error);
    productGrid.innerHTML = "<p>Failed to load products. Please try again later.</p>";
  }
}
loadProducts();
