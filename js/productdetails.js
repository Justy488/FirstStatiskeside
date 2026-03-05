const params = new URLSearchParams(window.location.search);
// console.log(params);
const id = params.get("id");

const productBox = document.querySelector("#productBox");
fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    // console.log(productdetail);

    productBox.innerHTML += ` <main id="productBox">
    <div class="split">
    <a href="index.html"><h1>FashionRUs</h1></a>
    </div>
    
    
    <div class="smallpush">
    <a href="index.html">Home</a>> <a href="productlist.html">Brands</a>>
    <a href="">PUMA</a>>
    <a href=""> Puma Backpack - Limited version (Black)</a>
    </div>
    
    <section class="product-info">
    <div class="img-wrapper">
    <img
    src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
    alt=""
    />
                
      ${data.discount ? `<span class='sale-badge no-discount'> ${data.discount} %</span>` : ""}
      ${data.soldout ? "<div class='sold-out-overlay'></div><span class='sold-out-badge'>Sold Out</span>" : ""}
    </div>
    <div class="mid-info">
    <div>
    <h1>Product Information</h1>
    <h2 class="productName">Model name</h2>
    <p>${data.articletype}</p>
    <h2>Color</h2>
    <p>Black</p>
    <h2>Inventory number</h2>
    <p>116389-6</p>
    </div>
    
    <div class="brand-section">
    <h1>${data.brandname} </h1>
    <p>${data.productdisplayname}</p>
    </div>
    </div>
    <article class="invert grey-box">
          <div>
          <h1>${data.productdisplayname}</h1>
          
          </div>
          <div class="brand-info">
          <p>${data.usagetype} | ${data.subcategory} </p>
          </div>
          <div class="dropdown">
          <label for="valg">Choose a size:</label>
          
          <select id="valg" name="valg">
          <option value="">Clothing Sizes </option>
          <option value="1">S</option>
          <option value="2">M</option>
          <option value="3">L</option>
          </select>
          </div>
          <button>Add to Basket</button>
          </article>
          </section>
          </main>`;
  });
