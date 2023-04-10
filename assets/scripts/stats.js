const tabla_max_min = document.getElementById('tablaMaxMin')
const tabla_pasado = document.getElementById('tablaPast')
const tabla_futuro = document.getElementById('tablaFuture')




obtenerArray()

async function fetchData() {
    data = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
       .then(resp => resp.json())
       .then(allData => {
           return allData
       })
   return data
 }

 async function obtenerArray(){
            let arrayEventos = await fetchData()
        
            porcentajeAsistencia(arrayEventos.events)
            let eventosFuturos = filtrarEventosFuturos(arrayEventos.events, arrayEventos.currentDate)
            let eventosPasados = filtrarEventosPasados(arrayEventos.events, arrayEventos.currentDate)
            let tabla1 = {
                'mayorCapacidad': eventosPasados.sort(function(a, b){return b.capacity - a.capacity})[0],
                'mayorPorcentaje': eventosPasados.sort(function(a, b){return b.porcentaje - a.porcentaje})[0],
                'menorPorcentaje': eventosPasados.sort(function(a, b){return a.porcentaje - b.porcentaje})[0]
            }
            
            let checkboxes = `
            <tr>
            <td>${tabla1.mayorPorcentaje.name} (${tabla1.mayorPorcentaje.porcentaje}%)</td>
            <td>${tabla1.menorPorcentaje.name} (${tabla1.menorPorcentaje.porcentaje}%)</td>
            <td>${tabla1.mayorCapacidad.name} (${tabla1.mayorCapacidad.capacity})</td>
            </tr>
            
        ` 

        tabla_max_min.innerHTML = checkboxes
        
        
        let categoriasPasadas = fCategorias(eventosPasados)
        let categoriasFuturas = fCategorias(eventosFuturos)
    
        let tablaPasado = obCategory(categoriasPasadas, eventosPasados)
        let tablaFuturo = obCategory(categoriasFuturas, eventosFuturos)
    
    
    
        createTable(tablaPasado, tabla_pasado)
    
        createTable(tablaFuturo, tabla_futuro)


}

function fCategorias(arr){
    let categoryArr = Array.from(new Set(arr.map(dataIndex => dataIndex.category)))
    return categoryArr
}


function porcentajeAsistencia(eventos){
       eventos.forEach(evento => {
        evento["porcentaje"] = parseFloat((((evento.estimate || evento.assistance) / evento.capacity * 100)).toFixed(2))
          });
    
}

function filtrarEventosPasados(eventos, fechaActual) {
    let eventosPasados = eventos.filter((event) => event.date < fechaActual)
    return eventosPasados
}

function filtrarEventosFuturos(eventos, fechaActual) {
    let eventosFuturos = eventos.filter((event) => event.date > fechaActual)
    return eventosFuturos
}
function obCategory(array, objetos){
    let objetoCategorias = []
    for (let i = 0; i < array.length; i++) {
        objetoCategorias.push([])
        for (const objeto of objetos) {
            if (array[i] == objeto.category) {
                objetoCategorias[i].push(objeto)
            }        
        }
    }
    return objetoCategorias
 }

 function createTable(array, tabla) {
    let tablaHTML = ``
    for (let i = 0; i < array.length; i++) {

        let revenue = 0
        let porcentajeTabla = 0
        let categoria
        for (const evento of array[i]) {
            categoria = evento.category
            revenue += evento.price * (evento.estimate || evento.assistance)
            porcentajeTabla += evento.porcentaje
        }
        
        porcentajeTablaPromedio = porcentajeTabla / (array[i].length)
        tablaHTML += `
    <tr>
        <td class="categoria">${categoria}</td>
        <td class="tValues">${revenue} U$D</td>
        <td class="tValues">${parseFloat(porcentajeTablaPromedio.toFixed(2))}%</td>
    </tr>`
        tabla.innerHTML = tablaHTML
    }
}