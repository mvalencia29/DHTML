window.addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ob1=document.getElementById('boton1');
  ob1.addEventListener('click',crearEnlaces,false);
}

function crearEnlaces(e)
{
  //Utilizando el innerHTML
  var ob1=document.getElementById("enlaces1");
  ob1.innerHTML='<a href="'+document.getElementById('text1').value+
                '">Enlace 1</a><br>'+'<a href="'+
                document.getElementById('text2').value+'">Enlace 2</a>';

  //Utilizando los métodos para crear nodos de elemento y texto
  var elemento=document.createElement('a');
  var puntero=document.getElementById('enlaces2');
  puntero.appendChild(elemento);
  var nodotexto=document.createTextNode('Enlace 1');
  elemento.appendChild(nodotexto);
  elemento.setAttribute('href',document.getElementById('text1').value);
  puntero.appendChild(document.createElement('br'));
  elemento=document.createElement('a');
  puntero.appendChild(elemento);
  nodotexto=document.createTextNode('Enlace 2');
  elemento.appendChild(nodotexto);
  elemento.setAttribute('href',document.getElementById('text2').value);
}
