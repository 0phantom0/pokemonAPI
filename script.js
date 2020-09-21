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

// otro
function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
 
        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      };