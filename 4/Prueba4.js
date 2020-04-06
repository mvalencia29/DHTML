var contador=1;
function agregar()
{
  var boton = document.getElementById("btnUno");

  if (contador == 2) {
    boton.disabled=true;
  }
  else {
    var nt=document.createTextNode('Nuevo texto '+contador+'-');
    var nparrafo=document.getElementById('parrafo');
    nparrafo.appendChild(nt);
    contador++;
  }
}
