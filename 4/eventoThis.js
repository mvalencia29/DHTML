function mostrarAtributos(objeto)
{
  var ref=document.getElementById('titulo');
  ref.firstChild.nodeValue='Name:'+objeto.name+' Id:'+objeto.id+' Value:'+objeto.value;
}
