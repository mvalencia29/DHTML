window.addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ob=document.getElementById('usuario');
  ob.addEventListener('keypress',presionTecla,false);
}

function presionTecla(e)
{
  var tecla=e.which;
  if(tecla==32)
  {
    e.preventDefault();
    alert('No se puede ingresar espacios en blanco para un nombre de usuario');
  }
}
