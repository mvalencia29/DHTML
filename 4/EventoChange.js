window.addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ob=document.getElementById('nombre');
  ob.addEventListener('change',modificarControl,false);
  ob=document.getElementById('apellido');
  ob.addEventListener('change',modificarControl,false);
  ob=document.getElementById('hijos');
  ob.addEventListener('change',modificarControl,false);
}

function modificarControl(e)
{
  var ob;
  ob=e.target;
  alert('Se modificó el control:'+ob.getAttribute('id'));
}
