const divCards = document.getElementById('dCards')

let tarjetas = ''

for (eventos of data.events){
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
   divCards.innerHTML = tarjetas

