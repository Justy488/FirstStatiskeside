// "use strict";

const productContainer = document.querySelector("section");

fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then((data) => {
    showPruducts(data);
  });

function showPruducts(productArr) {
  // console.log("productsArr", productsArr)
  productContainer.innerHTML = "";
  productArr.forEach((product) => {
    console.log("product", product.id);

    productContainer.innerHTML += ` <div>
              <a href="productdetails.html">
                <div class="img-wrapper">
                  <img
                    src="https://kea-alt-del.dk/t7/images/webp/640/1525.webp"
                    alt=""
                  />
                  <div class="sold-out-overlay"></div>
                  <span class="sold-out-badge">Sold Out</span>
                </div></a
              >
              <!-- <a href="https://www.youtube.com/watch?v=HXJx8j7JpKY"
                ><img
                  class="img-wrapper"
                  src="https://kea-alt-del.dk/t7/images/webp/640/1584.webp"
                  alt=""
              /></a> -->
              <div class="text-ryk">
                <h3>White Sweatshirt - Limited version</h3>
                <div class="subtitle">
                  <p> ${product.articletype} | ${product.brandname}</p>
                  <p>Color: Black / White / Grey</p>
                </div>
                <div>
                  <p>DKK 400,-</p>
                </div>
                <a href="">Read More</a>
              </div>
            </div>
    `;
  });
}
