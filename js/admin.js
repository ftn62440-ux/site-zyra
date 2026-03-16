fetch("/stats")

.then(r=>r.json())

.then(data=>{

new Chart(

document.getElementById("stats"),

{

type:"bar",

data:{

labels:["Users","Logins"],

datasets:[{

label:"Stats",

data:[data.users,data.logins]

}]

}

})

})