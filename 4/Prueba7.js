var orden=1;
function clonarNodos()
{
  var id=document.getElementById("enlaces");
  var nuevos=id.cloneNode(true);
  nuevos.style.id='enlaces'+orden;
  orden++;
  id=document.getElementById("enlacesnuevos");
  id.appendChild(nuevos);
}
