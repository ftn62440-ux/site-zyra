function goHome(){

window.location.href="index.html"

}

function goAccess(){

window.location.href="access.html"

}

function goDemo(){

if(!localStorage.getItem("logged")){

alert("Tu dois être connecté")

window.location.href="access.html"

return

}

window.location.href="demo.html"

}

function joinDiscord(){

window.open("https://discord.gg/Ktr8DrZT6h","_blank")

}

function searchUser(){

let username = document.getElementById("searchInput").value

let results = document.getElementById("results")

if(username===""){

results.innerHTML="Entre un nom"

return

}

results.innerHTML = "Recherche pour : " + username

}