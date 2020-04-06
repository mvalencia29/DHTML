window.addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var vec=document.getElementsByTagName('div');
  for(f=0;f0)
    d.firstChild.nodeValue=texto;
  else
  {
    d.appendChild(document.createTextNode(texto));
  }
}

function ocultarToolTip(e)
{
  var d = document.getElementById("divmensaje");
  d.style.visibility = "hidden";
}
