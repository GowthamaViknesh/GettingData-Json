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
