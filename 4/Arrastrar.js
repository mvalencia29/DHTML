window.addEventListener('load',inicializarEventos,false);
function inicializarEventos(e)
{
  var ob=document.createElement('div');
  ob.style.left='0px';
  ob.style.top='0px';
  ob.style.width='100px';
  ob.style.height='100px';
  ob.style.background='#ff0';
  ob.style.position='relative';
  var x=document.getElementsByTagName('body');
  x[0].appendChild(ob);
  var recu1=new Recuadro(ob);
}


Recuadro=function(div)
{
    var tX=0;
    var tY=0;
    var difX=0;
    var difY=0;

    div.addEventListener('mousedown',inicioDrag,false);


    function coordenadaX(e)
    {
      return e.pageX;
    }

    function coordenadaY(e)
    {
      return e.pageY;
    }

    function inicioDrag(e)
    {
      var eX=coordenadaX(e);
      var eY=coordenadaY(e);
      var oX=parseInt(div.style.left);
      var oY=parseInt(div.style.top);
      difX=oX-eX;
      difY=oY-eY;
      document.addEventListener('mousemove',drag,false);
      document.addEventListener('mouseup',soltar,false);
    }

    function drag(e)
    {
      tX=coordenadaY(e)+difY+'px';
      tY=coordenadaX(e)+difX+'px'
      div.style.top=tX;
      div.style.left=tY;
    }


    function soltar(e)
    {
      document.removeEventListener('mousemove',drag,false);
      document.removeEventListener('mouseup',soltar,false);
    }
}
