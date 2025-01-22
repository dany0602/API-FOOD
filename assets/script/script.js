const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');

if(code=='' || code==null){
  code='3021760400135'
}

fetch(`https://world.openfoodfacts.org/api/v3/product/${code}`)
.then(Response=> Response.json())
.then(data => {


// console.log(data)
// console.log(data.product.image_front_small_url)
// console.log(data.product.id)
// console.log(data.product.product_name_fr)
// console.log(data.product.categories)
// console.log(data.product.brands)
// console.log(data.product.nutriscore_grade)
// console.log(data.product.quantity)
// console.log(data.product.nova_group)
// console.log(data.product.ingredients_text_fr)

console.log(data.result.id)
if (data.result.id !== "product_found"){
document.getElementById('404').innerHTML = `<p>Code barre non trouvé, tapez un autre code.</p>`
} else {
  document.getElementById('404').innerHTML = ``
  document.getElementById('interface').innerHTML = `
  <img src="${data.product.image_front_url}" alt="" class="productimg">
        <p class="bold">${data.product.product_name_fr}</p>
        <p>${data.product.brands}</p>
        <p>${data.product.quantity}</p>
        <p>${data.product.categories}</p>
        <p>${data.product.ingredients_text_fr}</p>
        <div class="notegrade">
          <img src="./assets/img/Novascore/Nova${data.product.nova_group}.svg" alt="" class="gradea">
          <img src="./assets/img/Nutriscore/${data.product.nutriscore_grade}.svg" alt="" class="gradeb">
        </div>`
}

})




/* nom du produit domination generique categorie code barre marque photo nutri-score  nova 4
button rechercher v3  */
