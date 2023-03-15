const querySearch = document.location.search 
const id = new URLSearchParams(querySearch).get("id")

const detalles = data.events.find(evento => evento._id == id)

const divDetalles = document.getElementById("divDetails")

divDetalles.innerHTML = ` <div class="d-flex justify-content-center rounded mx-2 my-2" style="max-width: 100%;">
<img src="${detalles.image}" class="d-image"  alt="image_detail">          
</div>
<div class="card mx-2 my-2" style="width: 30rem;">        
<div class="card-body details-body">
    <h4 class="card-title">${detalles.name}</h4>
    <ul class="list-details">
    <li class="d-list"><p class="fw-bold p-details ">Description:</p> ${detalles.description} </li>
    <li class="d-list"><p class="fw-bold p-details">Date:</p> ${detalles.date} </li>
    <li class="d-list"><p class="fw-bold p-details">Category:</p> ${detalles.category} </li>
    <li class="d-list"><p class="fw-bold p-details">Place:</p> ${detalles.place} </li>
    <li class="d-list"><p class="fw-bold p-details">Capacity:</p> ${detalles.capacity} </li>
    <li class="d-list"><p class="fw-bold p-details">${detalles.assistance !== undefined ? "Assistance: " : "Estimate: "}</p> ${detalles.assistance !== undefined ? detalles.assistance : detalles.estimate} </li>
    <li class="d-list"><p class="fw-bold p-details">Price:</p>$ ${detalles.price} </li>
    
    </ul>
   </div>
</div>
`

