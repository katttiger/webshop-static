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
  return cart.findIndex((product) => productname === product.name);
}

function updateCartHtml() {
  let htmlCart = document.getElementById("cart-article");
  if (htmlCart) {
    let ul = `<ul class="cart-items">${cart
      .map(
        (cartItem, index) =>
          `<li>Produkt: ${cartItem.name} 
          <br>
          Antal: ${cartItem.amount} 
          <br>
            <button onclick="adjustAmount(${index}, 1)" class="adjust-amount-button" id="increase-amount-button">Add one (1)</button>
            <button onclick="adjustAmount(${index}, -1)" class="adjust-amount-button" id="decrease-amount-button">Remove one (1)</button>
            </li>`,
      )
      .join("")}
      </ul>`;
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

function adjustAmount(index, change) {
  if (index < 0 || index >= cart.length) return;

  cart[index].amount += change;

  if (cart[index].amount <= 0) {
    cart.splice(index, 1);
  }
  updateCartHtml();
}

// Fetch products from json
const productList = document.getElementById("productList");

const getProducts = async () => {
  try {
    const response = await fetch("./data/products.json");
    if (!response.ok) {
      console.error("Fel från server: ", response.status);
    }
    const products = await response.json();

    renderProducts(products);
  } catch (error) {
    console.error("Fel: ", error);
  }
};

const renderProducts = (products) => {
  products.forEach((product) => {
    const article = document.createElement("article");
    article.className = "product-article";

    const title = document.createElement("h3");
    title.textContent = product.name;

    const description = document.createElement("p");
    description.textContent = product.description;

    const price = document.createElement("p");
    price.textContent = product.price;

    const img = document.createElement("img");
    img.textContent = product.src;
    img.src = img.textContent = product.image;
    console.log(img.src);
    img.alt = product.imageAlt;

    const badge = document.createElement("span");
    if (badge != "") {
      badge.classList.add("top-right-triangle");
      if (product.badge.textContent === "Rea!") {
        badge.classList.add("sales-triangle");
      }
      if (product.badge.textContent === "Nyhet!") {
        badge.classList.add("news-triangle");
      }
      article.appendChild(badge);
    }

    const button = document.createElement("button");
    button.classList.add("buy-product-button");
    button.innerText = "Köp";

    button.addEventListener("click", () => {
      console.log(`Lägg i varukorg: ${product.name}`);
      updateCart(product.name);
    });

    // Assembly line
    article.appendChild(img);
    article.appendChild(title);
    article.appendChild(description);
    article.appendChild(price);
    article.appendChild(button);
    productList.appendChild(article);
  });
};

getProducts();
