// "use strict";
const params = new URLSearchParams(window.location.search);

const category = params.get("category");
console.log("CATEGORY", category);
const productContainer = document.querySelector("section");
//https://kea-alt-del.dk/t7/api/products?category=Footwear
fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}&limit=50`)
  // når man skriver. &=50 , så bliver tilføjet 50 nye produkter til product list. og man kan tilføje flere.
  .then((response) => response.json())
  .then((data) => {
    showProducts(data);
  });
document.querySelector(".asc").addEventListener("click",kliksorter);
document.querySelector(".desc").addEventListener("click", kliksorter);

function kliksorter(evt) {
  console.log("KLIK SORTER EVT",evt)
}


function showProducts(productArr) {
  // console.log("productsArr", productsArr)
  productContainer.innerHTML = "";
  // forEch = Det bruges til at gentage/loop eller prøve lykken
  productArr.forEach((product) => {
    console.log("product", product.id);

    // Når vi skriver ? så er det det samme som if, det en anden syntaks, som vi kan bruge inde i en template. (se evt. soldout)
    productContainer.innerHTML += ` <div class="smallProduct">
              <a href="productdetails.html">
              
                <div class="img-wrapper">
                  <img
                    src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
                    alt=""
                    />
                 ${product.discount ? `<span class='sale-badge no-discount'> ${product.discount} %</span>` : ""} 
                   
    
                  ${product.soldout ? "<div class='sold-out-overlay'></div><span class='sold-out-badge'>Sold Out</span>" : ""}
                </div></a
              >
              
              <div class="text-ryk">
                <h3>${product.productdisplayname}</h3>
                <div class="subtitle">
                  <p> ${product.articletype} | ${product.brandname}</p>
                  <p>Color: Black / White / Grey</p>
                 
                  
                
                </div>
                </div>
                
                <div class= "pris-ryk">
                 ${product.discount ? `<div><p class= price> Prev DKK ${Math.ceil((product.price / 100) * product.discount)},-</p></div>` : ""}
                 <p>DKK ${product.price},-</p>
                </div>
                <div>
                <a href="productdetails.html?id=${product.id}">Read More</a>
                </div>
            </div>
    `;
  });
}
