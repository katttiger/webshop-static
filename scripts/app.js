/* Button toggles menu*/

function toggleMenuButtonOnTabletDevices() {
  let x = document.getElementById("links-tablet");
  console.log("Button pressed");

  if (x.style.display === "none" || x.style.display === "") {
    console.log("Displays menu");
    x.style.display = "block";
  } else {
    console.log("Hides menu");
    x.style.display = "none";
  }
}

function toggleMenuButtonOnMobileDevices() {
  let x = document.getElementById("links-mobile");
  console.log("Button pressed");
  if (x.style.display === "none" || x.style.display === "") {
    console.log("Displays menu");
    x.style.display = "block";
  } else {
    console.log("Hides menu");
    x.style.display = "none";
  }
}

/* Add eventlistener to all product buttons */
const buyButtons = document.querySelectorAll(".buy-product-button");

buyButtons.forEach((button) => {
  addEventListener("click", () => {
    const name = button.dataset.name;
  });
});

/* The cart */
let cart = [];

/*Send in object */
function updateCart(name) {
  console.log(name);
  const indexOfProductInCart = checkIfProductExistsInCart(name);

  if (indexOfProductInCart >= 0) {
    cart[indexOfProductInCart].amount += 1;
  } else {
    cart.push({
      name: name,
      amount: 1,
    });
  }
  updateCartHtml();

  console.log(cart);
  alert(`${name} has been added to cart`);
}

function checkIfProductExistsInCart(productname) {
  console.log("Starting check");
  return cart.findIndex((product) => productname === product.name);
}

function updateCartHtml() {
  let htmlCart = document.getElementById("cart-article");
  if (htmlCart) {
    let ul = `<ul>${cart.map((cartItem) => `<li>${cartItem.name} - ${cartItem.amount}</li>`).join("")}</ul>`;
    htmlCart.innerHTML = ul;
  }
}

function displayCart() {
  let htmlCart = document.getElementById("cart-article");
  let buttonText = document.getElementById("display-cart-button");

  if (!htmlCart) {
    return;
  }

  if (htmlCart.style.display === "none" || htmlCart.style.display === "") {
    buttonText.innerText = "Hide cart";
    htmlCart.style.display = "block";
  } else {
    buttonText.innerText = "Display cart";
    htmlCart.style.display = "none";
  }
}
