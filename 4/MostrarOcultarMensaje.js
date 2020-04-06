window.addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ob=document.getElementById('enlace');
  ob.addEventListener('click',mostrarOcultarMensaje,false);
}

function mostrarOcultarMensaje(e)
{

  var ele=document.getElementById('mensaje');
  if (ele.className=='mensajeoculto')
     ele.className='mensajevisible';
  else
     ele.className='mensajeoculto';
}
