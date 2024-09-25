let text=document.getElementById("a")
let remove=document.getElementById("remove")
let play=document.getElementById("play")
let result=document.getElementById("result")
let reload =document.getElementById("reload")
play.onclick=()=>{
    result.innerHTML=text.value
    localStorage.setItem("resultat",text.value)
}
remove.onclick=()=>{
    result.innerHTML=""
    text.value=localStorage.getItem("resultat")
}

onload=()=>{
    text.value=localStorage.getItem("resultat")
}
reload.onclick=()=>{
    location.reload()
    // location.replace("")
    // location.assign("")
}
let a=document.getElementById("ba")
a.onclick=()=>{
 document.body.style.backgroundColor="black"
 document.body.style.color="white"
//  a.style.backgroundColor="white"
}
let b=document.getElementById("bb")
b.onclick=()=>{
  document.body.style.color="black"
 document.body.style.backgroundColor="white"
}
