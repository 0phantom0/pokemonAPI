var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var nombre1=document.getElementById("nombre1");
var imagen1=document.getElementById("imagen1");
var nombre2=document.getElementById("nombre2");
var imagen2=document.getElementById("imagen2");

btn1.addEventListener('click',function(){
    fetch("https://pokeapi.co/api/v2/pokemon/1")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            nombre1.textContent=data.name
            imagen1.setAttribute("src",data.sprites.front_default)
        })
        .catch(err => console.log(err))
})

btn2.addEventListener('click',function(){
    fetch("https://pokeapi.co/api/v2/pokemon/2")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            nombre2.textContent=data.name
            imagen2.setAttribute("src",data.sprites.front_default)
        })
        .catch(err => console.log(err))
})

