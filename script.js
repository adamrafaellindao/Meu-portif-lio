let check = document.getElementById("Switch")

function Switchbtn(){
  if(check.checked){
    document.body.classList.add("darkmode")
    localStorage.setItem("Modo", "escuro")}

    else{
      document.body.classList.remove("darkmode")
      localStorage.setItem("Modo", "claro")}
}

addEventListener("DOMContentLoaded", ()=>{
  let status = localStorage.getItem("Modo")
  
if (status === "escuro"){
  check.checked = true
}
else { 
  check.checked = false
}
Switchbtn()
})





 