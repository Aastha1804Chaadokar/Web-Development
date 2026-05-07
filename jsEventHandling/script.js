function Bulb1ON(){
    document.getElementById("bulb1").style.backgroundColor = "yellow";

}
function Bulb1OFF(){
    document.getElementById("bulb1").style.backgroundColor="white";

}
function Bulbred(){
    document.getElementById("bulb1").style.backgroundColor = "red";

}
function Bulbblue(){
    document.getElementById("bulb1").style.backgroundColor = "blue";

}
function Bulbgreen(){
    document.getElementById("bulb1").style.backgroundColor = "green";

}
document.getElementById("bulbblue").addEventListener("click",Bulbblue)
document.getElementById("bulbgreen").addEventListener("click",Bulbgreen)


document
.getElementById("bulb1Color")
.addEventListener("change",ChangebulbColor);


function ChangebulbColor(){
const color =document.getElementById("bulb1Color").value;
document.getElementById("ABCD").style.backgroundColor=color;
}
