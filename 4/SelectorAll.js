window.addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ob1=document.querySelector("#boton1");
  ob1.addEventListener('click',presion,false);
}

function presion(e)
{
  var ob1=document.querySelectorAll("li");
  for(var x=0;x<ob1.length;x++)
    ob1[x].style.backgroundColor='#ff0';
}
