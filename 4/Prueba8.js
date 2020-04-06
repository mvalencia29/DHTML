function tipoDeNodos()
{
  var puntero=document.getElementById('grupo');
  alert (puntero.nodeName + " es de tipo " + puntero.nodeType);
  var hijo=puntero.childNodes[0];
  alert (hijo.nodeName + " es de tipo " + hijo.nodeType);
  var nieto=hijo.childNodes[0];
  alert (nieto.nodeName + " es de tipo " + nieto.nodeType);
}
