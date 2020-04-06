function presionParrafo()
{
  alert('se presionó el párrafo');
}

function presionCasilla11()
{
  alert('se presionó la casilla 1,1');
}

function presionBoton()
{
  alert('se presionó el botón');
}

 function color1(){
   var casilla = document.getElementById("casilla1");
   casilla.style.background = 'red';
 }
 function color2(){
   var casilla = document.getElementById("casilla1");
   casilla.style.background = 'white';
 }
 function obtenerValor(e){
  document.getElementById("input").value = "casilla 1";
 }
