function mover(e)
{
  var corx=document.getElementById('corx');
  var cory=document.getElementById('cory');
  corx.firstChild.nodeValue='coordenada x='+e.clientX;
  cory.firstChild.nodeValue='coordenada y='+e.clientY;
}
