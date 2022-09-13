async function foo(){
    try{
    var result=await fetch("https://zoo-animal-api.herokuapp.com/animals/rand");
    var res=await result.json();
    console.log(res);
    var div=document.createElement("div")
for(i in res){
    div.style.margin="220px 500px";
        div.innerHTML=`<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header" style="text-align:center">ZOO ANIMAL</div>
        <div class="card-body">
<h5 class="card-title" style="text-align:center">${i}: ${res[i]}</h5>
</div>
</div>`
document.body.append(div)
    }
    }
    catch(error){
        console.log(error)
    }
}

foo();

