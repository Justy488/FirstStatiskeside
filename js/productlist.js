// "use strict";
const params = new URLSearchParams(window.location.search);

const category = params.get("category");
console.log("CATEGORY", category);
const productContainer = document.querySelector("section");
//https://kea-alt-del.dk/t7/api/products?category=Footwear
fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`)
  .then((response) => response.json())
  .then((data) => {
    showProducts(data);
  });

function showProducts(productArr) {
  // console.log("productsArr", productsArr)
  productContainer.innerHTML = "";
  // forEch = Det bruges til at gentage/loop eller prøve lykken
  productArr.forEach((product) => {
    console.log("product", product.id);

    productContainer.innerHTML += ` <div>
              <a href="productdetails.html">
                <div class="img-wrapper">
                  <img
                    src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
                    alt=""
                  />
                  <div class="sold-out-overlay"></div>
                  <span class="sold-out-badge">Sold Out</span>
                </div></a
              >
              <div class="text-ryk">
                <h3>${product.productdisplayname}</h3>
                <div class="subtitle">
                  <p> ${product.articletype} | ${product.brandname}</p>
                  <p>Color: Black / White / Grey</p>
                </div>
                <div>
                  <p>${product.price},-</p>
                </div>
                <a href="productdetails.html?id=${product.id}">Read More</a>
              </div>
            </div>
    `;
  });
}
