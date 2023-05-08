
 let url = "https://kontests.net/api/v1/all"

 document.body.style.backgroundColor = "rgba(67, 101, 119, 1.255);"

//  let image =["" ]

let response = fetch(url)
response.then((v)=>{
    return v.json()



    
}).then((contests) =>{
    console.log(contests)
  
  let ihtml = "";



    for(item in contests ){
        console.log(contests[item])
        ihtml += `
        <div  class="card my-3 mx-4" style="width: 23rem;">
        
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <h6 class="card-title">${contests[item].site}</h6>
          <p class="card-text"> Start at : ${contests[item].start_time= new Date()}</p>
          <p class="card-text"> Start at : ${contests[item].end_time = new Date()}</p>
          <p class="card-text"> In 24 hours : ${contests[item].in_24_hours}</p>
          <a href="${contests[item].url}" class="btn btn-success">visit here</a>
        </div>
      </div> `

      
    }
    document.getElementById("cardContainer").innerHTML = ihtml


})

