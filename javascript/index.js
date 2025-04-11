const text = document.querySelector("textarea");
const send = document.querySelector("button");
const display = document.querySelector(".output");

send.addEventListener("click", function(){
    let newmssg = document.createElement("p");
    newmssg.textContent = text.value;
    display.appendChild(newmssg);
    newmssg.style = "max-width:120px;max-height:100px;margin-left:50px; border-radius:10px 10px 0% 10px; background-color:white; display:flex; font-size:11px; align-items:center; justify-content:center; flex-direction: column;color: hsl(271, 15%, 43%); margin-bottom:10px; padding:10px"
    text.value = ""
})