window.addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ob=document.getElementById('enlace');
  ob.addEventListener('click',presionEnlace,false);
}

function presionEnlace(e)
{
  e.preventDefault();
  var url=e.target.getAttribute('href');
  window.open(url);
}
