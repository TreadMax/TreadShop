
const card = [];
const cartCountElement = document.querySelector("#cart-count");
const addButtons = document.querySelectorAll(".product-card button");

function updateCartCount() {
  cartCountElement.textContent = card.length;
}

function addToCart(name, price) {
  card.push({ name: name, price: price });
  updateCartCount();
  console.log("Card:", card);
}

addButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const card = button.closest(".product-card");
    const name = card.querySelector("h3").textContent;
    const priceText = card.querySelector(".price").textContent;
    const price = parseFloat(priceText.replace("$", ""));
    addToCart(name, price);
  });
});
