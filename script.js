fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())
.then(data =>{
  var container = document.getElementsByClassName('container')[0];
  data.forEach(element => {
    var bar=document.createElement('div');
    bar.innerHTML=`
    <div class="row">
      <div class="col-lg-4 col-sm-12">
        <div class="card border-0" style="width: 20rem;">
           <div class="card-header">
            <div class="p-3" style="text-align: center; background-color: black; color: white;">${element.name.common}
            </div>
               <div class="card-body">
        <img src="${element.flags.png}" class="card-img-top" alt="Flag of Afghanistan">
           <div class="card-body" style="text-align: center;">
             <div class="card-text">${element.capital}</div>
               <div class="card-text">${element.region}</div>
                 <div class="card-text">${element.cca3}</div>
                 <div class="card-text">${element.latlng}</div>
                  <div class="mt-3">
                     <a href="#" class="btn btn-primary">Click For Weather</a>
                </div>
             </div>
         </div>
      </div>
    </div>
  </div>
</div>`;
container.appendChild(bar);
});
})
.catch(error => {
  console.log('Error:', error);
});


/*
// Fetch data from REST Countries API
fetch('https://restcountries.com/v2/all')
.then(response => response.json())
.then(data => {     
  const container = document.getElementById('container');      
  data.forEach(country => {        
    const countryElement = document.createElement('div');        
    
    countryElement.innerHTML = `
    <div class = "row" >
        <div class = "col-lg-4 col-sm-12">
            <div class="card" style="width: 18rem;">
                <div class="cardrow">
                    <h5 class="card-title">${country.name}</h5>
                </div>
                <div class="card-body text-center">
                    <img class="card-img-top" src="${country.flags.png}" alt="Card image cap">
                    <p class="card-text">Capital: <spn>${country.capital}</spn></p>
                    <p class="card-text">Region: <spn>${country.region}</spn></p>
                    <p class="card-text">latlng: <spn>${country.latlng}</spn></p>                                                
                    <p class="card-text">Country Code: <spn>${country.cioc}</spn></p>
                    <a href="#" class="btn bg-transparent">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>       
    `;
    
    // Append the country element to the container
    container.appendChild(countryElement);
  });
})
.catch(error => {
  console.log('Error:', error);
});*/