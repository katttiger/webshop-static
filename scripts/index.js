const productListIndex = document.getElementById("productList-index");

const getProducts = async () => {
  try {
    const response = await fetch("./data/products.json");
    if (!response.ok) {
      console.error("Fel från server: ", response.status);
    }
    const products = await response.json();

    console.log("Index product load");
    renderFeaturedProducts(products);
  } catch (error) {
    console.error("Fel: ", error);
  }
};

const renderFeaturedProducts = (products) => {
  const featuredProducts = [1, 3, 4];
  const productListIndex = document.getElementById("productList-index");

  if (!productListIndex) {
    console.log("Element #productList-index not found");
    return;
  }

  products.forEach((product) => {
    if (featuredProducts.includes(product.id)) {
      const article = document.createElement("article");
      article.classList.add("featured-product");

      const title = document.createElement("h3");
      title.textContent = product.name;

      const img = document.createElement("img");
      img.textContent = product.src;
      img.src = img.textContent = product.image;
      img.alt = product.imageAlt;

      // Assembly line
      article.appendChild(img);
      article.appendChild(title);
      productListIndex.appendChild(article);
    }
  });
};

getProducts();
