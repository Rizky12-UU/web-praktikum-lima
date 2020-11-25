const Ul = document.querySelector("ul");
const inputuhuy = document.querySelector("input");
const button = document.querySelector("button");
const licuy = document.createElement("li");



button.addEventListener('click',function(){
    const licuy = document.createElement("li");
    const isiInput = document.createTextNode(inputuhuy.value);
    licuy.appendChild(isiInput);
    Ul.appendChild(licuy);
    inputuhuy.value="";
 

});