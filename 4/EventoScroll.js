window.addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  window.addEventListener('scroll',cambioScroll,false);
}

function cambioScroll(e)
{
  var mensaje = document.getElementById("mensaje");
  mensaje.style.top = document.body.scrollTop;
}
