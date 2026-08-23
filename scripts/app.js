/* Button toggles menu*/

//TODO: There is a lag when clicking on the menu button for the first time on a new page. The function is stuck in the last finction unless I explicitly set the display to none
function toggleMenuButtonOnTabletDevices() {
  let x = document.getElementById("links-tablet");
  console.log("Button pressed");
  if (x.style.display === "none") {
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
  if (x.style.display === "none") {
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
  indexOfProductInCart = checkIfProductExistsInCart(name);

  if (indexOfProductInCart >= 0) {
    cart[indexOfProductInCart].amount += 1;
  } else {
    cart.push({
      name: name,
      amount: 1,
    });
  }
  console.log(cart);
  alert(`${name} has been added to cart`);
}

function checkIfProductExistsInCart(productname) {
  console.log("Starting check");
  return cart.findIndex((product) => productname === product.name);
}

//TODO: Doesn't update automatically when adding a new product to cart.
function displayCart() {
  console.log("Displays cart");

  let htmlCart = document.getElementById("cart-article");
  let buttonText = document.getElementById("display-cart-button");

  if (!htmlCart) {
    console.log("Cart does not exist or is null");
    return;
  }

  if (htmlCart.style.display === "none") {
    buttonText.innerText = "Hide cart";
    htmlCart.style.display = "block";
    let ul = `<ul>${cart.map((cartItem) => `<li>${cartItem.name} - ${cartItem.amount}</li>`).join("")}</ul>`;
    htmlCart.innerHTML = ul;
  } else {
    buttonText.innerText = "Display cart";
    htmlCart.style.display = "none";
  }
}
