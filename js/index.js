// console.log("Hello, World");
const categoryContainer = document.querySelector(".container");
// Denne queryselector laver en reference til det jeg gerne vil ligge ind i reolen.
// console.log(categoryContainer);

// her har vi skrevet at konsolen skal fortælle os hvad vi peger på.
// I dette tilfælde er det at vi peger på "reolen" -> "inde i reolen" -> "[Kasse 3]" = "Free Items"
// Husk at man tæller fra 0

// Man skal huske at bruge det rigtige Array
fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((category) => {
      categoryContainer.innerHTML += `<div class="box-master box1">
            <a href="productlist.html">${category.category}</a>
          </div>`;
      // Dette er basicly en "HTML", som jeg skriver ind for at det bliver lagt ind dynamisk.
      // DEt er html template, som defineres. Hvis der ligger et link inde en div med en class,
      // så er det den vi referer til.
    });
  });
