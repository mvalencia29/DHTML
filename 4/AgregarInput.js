var cantidad = 0;
var posicion = 0;
function agregarHijo()
{
  cantidad++;
  posicion++;
  var fs =document.getElementById('fs');
  var listaFs = fs.getElementsByTagName('fieldset');
  for(var i = 0; i<listaFs.length; i++){
    listaFs[i].style.display = "none";
  }
  var nuevohijo = document.createElement('fieldset');
  nuevohijo.name = 'nombre';
  nuevohijo.id = 'nombre' + cantidad;
  nuevohijo.style.display = "block";
  var id = cantidad-1;
  if(cantidad>=0){
    posicion = cantidad;
  }
  document.getElementById('fs').appendChild(nuevohijo);
  var nt = document.createTextNode('Nuevo '+ cantidad +'' );
  nuevohijo.appendChild(nt);
  var anterior = document.getElementById('nombre'+id)
  anterior.style.display = "none";

}

function EliminarHijo(){
  var fs = document.getElementById('fs');
  var listaFs = fs.getElementsByTagName('fieldset');
  for(var i = 0; i<listaFs.length; i++){
    listaFs[i].style.display = "none";
  }
  if(fs.hasChildNodes()){
    fs.removeChild(fs.lastChild);
    if(cantidad>0){
        cantidad--;
    }
    fs = document.getElementById('fs');
    listaFs = fs.getElementsByTagName('fieldset');
    posicion = listaFs.length;

    var anteriorfieldset = document.getElementById('nombre'+cantidad)
    anteriorfieldset.style.display = "block";
  }

}

function avanzar(){
  console.log(posicion);
  var fieldset = document.getElementById('nombre'+posicion);
  fieldset.style.display= "none";
  var fs = document.getElementById('fs');
  var listaFs = fs.getElementsByTagName('fieldset');

  for(var i = 0; i<listaFs.length; i++){
    listaFs[i].style.display = "none";
  }
  var avanc = posicion;
  if(posicion<listaFs.length){
      avanc = posicion+1;
      posicion++;
  }
  var fieldset2 = document.getElementById('nombre'+avanc);
  fieldset2.style.display = "block";
  console.log(posicion+" fin");

}

function retroceder(){
  console.log(posicion);
  var fieldset = document.getElementById('nombre'+posicion);
  fieldset.style.display= "none";
  var fs = document.getElementById('fs');
  var listaFs = fs.getElementsByTagName('fieldset');
  for(var i = 0; i<listaFs.length; i++){
    listaFs[i].style.display = "none";
  }
  var retro = posicion;
  if(posicion>1){
     retro = posicion-1;
     posicion--;
  }
  var fieldset2 = document.getElementById('nombre'+retro);
  fieldset2.style.display = "block";
  console.log(posicion+" fin");
}

function retrocederPrimero(){
  var fs = document.getElementById('fs');
  var listaFs = fs.getElementsByTagName('fieldset');
  for(var i = 0; i<listaFs.length; i++){
    listaFs[i].style.display = "none";
  }
  if(listaFs.length>0){

    listaFs[0].style.display = "block";
  }
}

function avanzarUltimo(){
  var fs = document.getElementById('fs');
  var listaFs = fs.getElementsByTagName('fieldset');
  for(var i = 0; i<listaFs.length; i++){
    listaFs[i].style.display = "none";
  }
  if(listaFs.length>0){

    listaFs[listaFs.length-1].style.display = "block";
  }
}
