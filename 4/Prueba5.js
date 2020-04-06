function crearElementoyAtributo()
{
  var elemento=document.createElement('a');
  var puntero=document.getElementById('direccion');
  puntero.appendChild(elemento);
  nodotexto=document.createTextNode('google');
  elemento.appendChild(nodotexto);
  elemento.setAttribute('href','http://www.google.com.ar');
}
