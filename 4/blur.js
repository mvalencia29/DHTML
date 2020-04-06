window.addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ob1=document.getElementById('text1');
  ob1.addEventListener('focus',tomarFoco,false);
  ob1.addEventListener('blur',perderFoco,false);
  var ob2=document.getElementById('text2');
  ob2.addEventListener('focus',tomarFoco,false);
  ob2.addEventListener('blur',perderFoco,false);
}

function tomarFoco(e)
{
  e.target.style.color='#f00';
}

function perderFoco(e)
{
  e.target.style.color='#00f';
}
