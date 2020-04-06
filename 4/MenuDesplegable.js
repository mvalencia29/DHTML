window.addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  inicializarMenu('menu');
}

function inicializarMenu(m)
{
  var ob=document.getElementById(m);
  var menu=ob.getElementsByTagName('ul');
  for(f=1;f<menu.length;f++)
  {
    menu[f].style.display='none';
  }
  var enlaces=ob.getElementsByTagName('a');
  for(f=0;f<enlaces.length;f++)
  {
    enlaces[f].addEventListener('click',itemSeleccionado,false);
  }
}
function itemSeleccionado(e)
{
  var enlace;
  enlace=e.target;
  var padre=enlace.parentNode;
  var ul=padre.getElementsByTagName('ul');
  if (ul.length>0)
  {
    if (ul[0].style.display=='none')
      ul[0].style.display='block';
    else
      ul[0].style.display='none';
  }
}

function addEvent(elemento,nomevento,funcion,captura)
{
  elemento.addEventListener(nomevento,funcion,captura);
  return true;
}
