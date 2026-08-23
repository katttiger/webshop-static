/* Button toggles menu*/

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
  alert(`${product.name} has been added to cart`);
}

function checkIfProductExistsInCart(productname) {
  console.log("Starting check");
  return cart.findIndex((product) => productname === product.name);
}


/* Print cart on product */