const text = document.querySelector("input");
const send = document.querySelector("button");
const display = document.querySelector(".output");

send.addEventListener("click", function(){
    let newmssg = document.createElement("p");
    newmssg.textContent = text.value;
    display.appendChild(newmssg);
    newmssg.style = "max-width:120px; margin-left:50px; border-radius:20px; max-height:100px; background-color:white; display:flex; align-items:center; justify-content:flex-start; padding:10px; flex-direction: column; overflow-y: auto; margin-top:10px;color: hsl(271, 15%, 43%)"
    text.value = ""
})