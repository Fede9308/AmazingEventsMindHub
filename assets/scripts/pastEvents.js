const divCards = document.getElementById('dCards')
const dCategories=document.getElementById('categories')

let tarjetas = ''

for (eventos of data.events){
    if(eventos.date <= data.currentDate){
        tarjetas += `<div class="card m-2" style="width: 18rem;">
  <img src=${eventos.image} class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${eventos.name}</h5>
    <p class="card-text">${eventos.description}</p>
    <div class="d-flex flex-wrap justify-content-around align-items-baseline">
      <p>Pricing: $${eventos.price}</p>
      <a href="./details.html" class="btn btn-outline-success">Details</a>
        </div>
     </div>
    </div>
  </div>`
    }
 
}
   divCards.innerHTML = tarjetas
 
   crearCategories(data.events)


function crearCategories(array){
let arrayCategories = array.map(categoria => categoria.category)
let arrayCategoriesF = arrayCategories.filter((filtro, index) => arrayCategories.indexOf(filtro) == index )
let box = ''
arrayCategoriesF.forEach(check => {
  box += `<div class="form-check form-check-inline border-bottom border-secondary">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">${check}</label>
</div> `
})
dCategories.innerHTML = box
}
