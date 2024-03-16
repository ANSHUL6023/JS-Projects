const products = document.getElementById("products");
const response = axios
  .get("https://fakestoreapi.com/products")
  .then((response) => {
    const { data } = response;
    data.forEach((product) => {
      console.log(product);
      products.innerHTML += `
          <div class="product">
        <div class="product-image">
          <img
            src= ${product.image}
            alt="Error loading image"
          />
        </div>
        <div class="product-info">
          <h2 class="tittle">${product.title}</h2>
          <p>${product.price}</p>
        </div>
      </div>`;
    });
  })
  .catch((err) => {
    console.log(`Err.message`);
  });
