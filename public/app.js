import products  from "./data";

const productEl = document.getElementById("productList");

const relatedProduct = document.getElementById("related-products");



function productItems() {
   products.forEach((item, key) => {
    let div = document.createElement("div");
    
    let star = '';
    for(index = 0; index < item.rating; index++) {
        star += `<i class="fa fa-star"></i>`;
    }

    div.innerHTML = `
       <img src="images/${item.image}"/>
       <div class="name">${item.name}</div>
       <div class="star">${star}
       <div class="price">${item.price}</div>
       <div class="stock">${item.numInStock}</div>
    `;

    productEl.appendChild(div);
   });
}

productItems();
