window.addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ob=document.getElementById('buscar');
  ob.addEventListener('focus',tomarFoco,false);
}

function tomarFoco(e)
{
  e.target.value='';
}
