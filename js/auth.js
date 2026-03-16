async function register(){

let username=document.getElementById("user").value
let password=document.getElementById("pass").value

await fetch("/register",{

method:"POST",

headers:{"Content-Type":"application/json"},

body:JSON.stringify({username,password})

})

alert("Compte créé")

}

async function login(){

let username=document.getElementById("user").value
let password=document.getElementById("pass").value

let r=await fetch("/login",{

method:"POST",

headers:{"Content-Type":"application/json"},

body:JSON.stringify({username,password})

})

if(r.ok){

localStorage.setItem("logged",true)

window.location="index.html"

}else{

alert("Login incorrect")

}

}