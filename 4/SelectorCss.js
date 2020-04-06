window.addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ob1=document.querySelector("#boton1");
  ob1.addEventListener('click',presion,false);
}

function presion(e)
{
  var ob1=document.querySelector(".mensaje");
  ob1.style.backgroundColor='#ff0';
  var ob2=document.querySelector("#lista1");
  ob2.style.backgroundColor='#0ff';
}
