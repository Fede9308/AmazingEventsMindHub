

async function fetchData() {
    data = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
       .then(resp => resp.json())
       .then(allData => {
           return allData;
       });
   return data;
 };

 
let sData = fetchData()

 console.log(sData)