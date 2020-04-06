function moverItem()
{
  var ref1=document.getElementById('lista1');
  var refhijo=ref1.firstChild;
  var ref2=document.getElementById('lista2');
  ref2.appendChild(refhijo);
}
