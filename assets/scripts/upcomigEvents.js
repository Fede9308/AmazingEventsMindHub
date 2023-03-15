const divCards = document.getElementById('dCards')
const dCategories=document.getElementById('categories')
const input = document.querySelector('input')



input.addEventListener('input',superFiltro)

dCategories.addEventListener('change',superFiltro)

function superFiltro(){
  let primerFiltro = filtrarPorTexto(data.events,input.value)
  let segundoFiltro = filtrarPorCategoria(primerFiltro)
  crearTarjetas(segundoFiltro)
}

crearTarjetas(data.events) 
crearCategories(data.events)

   function crearTarjetas(eventos){
    let eventosPasados = eventos.filter(evento => evento.date >= data.currentDate)
    if(eventosPasados.length == 0){
      divCards.innerHTML = `<h2 class="display-1 fw-bolder">No hay coincidencias</h2>`
      return
    }
  
    let tarjetas = ''
    eventosPasados.forEach(tarjeta => {
      tarjetas +=`<div class="card m-2" style="width: 18rem;">
      <img src=${tarjeta.image} class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${tarjeta.name}</h5>
        <p class="card-text">${tarjeta.description}</p>
             <div class="d-flex flex-wrap justify-content-around align-items-baseline">
          <p>Pricing: $${tarjeta.price}</p>
          <a href="./details.html?id=${tarjeta._id}" class="btn btn-outline-success">Details</a>
            </div>
         </div>
        </div>
      </div>`
    })
    divCards.innerHTML = tarjetas
  }

function crearCategories(array){
let arrayCategories = array.map(categoria => categoria.category)
let arrayCategoriesF = arrayCategories.filter((filtro, index) => arrayCategories.indexOf(filtro) == index )
let box = ''
arrayCategoriesF.forEach(check => {
  box += `<div class="form-check form-check-inline border-bottom border-secondary">
  <input class="form-check-input" type="checkbox" id="${check}"     value="${check}">
  <label class="form-check-label" for="${check}">${check}</label>
</div> `
})
dCategories.innerHTML = box
}

function filtrarPorTexto(array,texto){
  let arrayFiltrado = array.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
  return arrayFiltrado
}

function filtrarPorCategoria(array){
  let checkboxes = document.querySelectorAll("input[type='checkbox']")
  console.log(checkboxes);
  let arrayChecks = Array.from(checkboxes)
  let arrayChecksChecked = arrayChecks.filter(check => check.checked)
  console.log(arrayChecksChecked);
  let arrayChecksCheckedValues = arrayChecksChecked.map(checkChecked => checkChecked.value)
  console.log(arrayChecksCheckedValues);
  let arrayFiltrado = array.filter(elemento => arrayChecksCheckedValues.includes(elemento.category))
  console.log(arrayFiltrado);
  if(arrayChecksChecked.length > 0){
      return arrayFiltrado
  }
  return array
}
