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

function addProductToCart(name) {
  alert(`${name} has been added to cart`);
}