window.addEventListener('load', () => {
  let online = window.navigator.onLine;
  console.log("Estado: " + online);
  estado(online);




});


function estado(stat) {
  var s = document.getElementById('status')
  console.log(s.innerHTML);
  if (stat) {
    goOnline();
  } else {
    goOffline();
  }

  function goOnline() {
    s.classList.remove('offline');
    s.classList.add('online');
    s.innerHTML = "Online";
  }

  function goOffline() {
    s.classList.remove('online');
    s.classList.add('offline');
    s.innerHTML = "Offline";
  }
}

function agregar() {

  var v1 = document.getElementById('val1').value;
  var v2 = document.getElementById('val2').value;
  var v3 = document.getElementById('val3').value;
  var v4 = document.getElementById('val4').value;
  console.log(v1 + ", " + v2 + ", " + v3 + ", " + v4);
  // Obtenemos el numero de filas (td) que tiene la primera columna
  // (tr) del id "datos"
  var filas = $("#datos tr:first td").length;
  console.log("Filas: " + filas);
  // Obtenemos el total de columnas (tr) del id "datos"
  var columnas = $("#datos tr").length;
  console.log("Columnas: " + columnas);

  var contenido = "";

  for (var i = 0; i < columnas; i++) {
    contenido = " <tr> <td>" + v1 + "</td> <td> " + v2 + "</td> <td> " + v3 + "</td> <td> " + v4 + "</td> </tr>";

  }
  console.log(contenido);
  $("#datos").append(contenido);

  document.getElementById('val1').value = "";
  document.getElementById('val2').value = "";
  document.getElementById('val3').value = "";
  document.getElementById('val4').value = "";
}

function archJson() {
  var elem = document.getElementById('descargar');

  elem.download = "archivo.json";
  elem.href = "data:application/octet-stream," +
    encodeURIComponent(contenidoDeArchivo);
}
