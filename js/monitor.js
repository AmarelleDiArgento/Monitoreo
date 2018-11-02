let postco =
  [
    {
      "Nombre": "Arandanos",
      "Fincas": ["Arandanos - Albania", "Arandanos - Cerrito A", "Arandanos - Cerrito B"],
      "Productos": ["Arandanos"]
    },
    {
      "Nombre": "Carnations",
      "Fincas": ["A. Carnations"],
      "Productos": ["Rosas"]
    },
    {
      "Nombre": "El Morado",
      "Fincas": ["La Valentina", "Marly", "Marly 1", "Rt Ltda", "San Carlos", "San Mateo", "San Pedro"],
      "Productos": ["Rosas", "Alstroemerias"]
    },
    {
      "Nombre": "El Rosal",
      "Fincas": ["El Rosal"],
      "Productos": ["Rosas"]
    },
    {
      "Nombre": "Fantasy",
      "Fincas": ["Fantasy 1", "Fantasy 2", "Fantasy 3", "Fantasy 6", "Fantasy 8"],
      "Productos": ["Clavel", "Miniclavel", "Rosas"]
    },
    {
      "Nombre": "Florex",
      "Fincas": ["Florex"],
      "Productos": ["Pompon"]
    },
    {
      "Nombre": "Gerberas",
      "Fincas": ["Elite - Gerberas"],
      "Productos": ["Gerberas"]
    },
    {
      "Nombre": "Guacari",
      "Fincas": ["Guacari"],
      "Productos": ["Rosas"]
    },
    {
      "Nombre": "Jardines De Colombia",
      "Fincas": ["Jardines De Colombia"],
      "Productos": ["Pompones"]
    },
    {
      "Nombre": "Las Delicias",
      "Fincas": ["Las Delicias"],
      "Productos": ["Verdes"]
    },
    {
      "Nombre": "Las Margaritas",
      "Fincas": ["Circasia - Elite", "La Esmeralda", "Las Margaritas", "Santamaria"],
      "Productos": ["Alstroemerias", "Rosas"]
    },
    {
      "Nombre": "Las Mercedes",
      "Fincas": ["Mercedes"],
      "Productos": ["Clavel", "Miniclavel", "Rosas"]
    },
    {
      "Nombre": "Las Palmas",
      "Fincas": ["A. Las Palmas"],
      "Productos": ["Alstroemerias", "Rosas"]
    },
    {
      "Nombre": "Miramonte",
      "Fincas": ["Miramonte 2", "Miramonte 3"],
      "Productos": ["Pompon"]
    },
    {
      "Nombre": "Normandia",
      "Fincas": ["Normandia"],
      "Productos": ["Rosas"]
    },
    {
      "Nombre": "Rosas Colombianas",
      "Fincas": ["Rosas Colombianas"],
      "Productos": ["Rosas"]
    },
    {
      "Nombre": "San Andres",
      "Fincas": ["San Andres"],
      "Productos": ["Diver"]
    },
    {
      "Nombre": "Valdaya",
      "Fincas": ["Valdaya"],
      "Productos": ["Rosas"]
    },
    {
      "Nombre": "Valentinos",
      "Fincas": ["Chusaca E.U.", "El Respiro", "Tikiya", "Tinzuque"],
      "Productos": ["Clavel", "Miniclavel", "Rosas"]
    },
    {
      "Nombre": "Vista",
      "Fincas": ["Vista   -   Elite"],
      "Productos": ["Rosas"]
    }

  ]



window.addEventListener('load', () => {
  let online = window.navigator.onLine;
  console.log("Estado: " + online);
  estado(online);
  console.log(postco);
});


function estado(stat) {
  var s = document.getElementById('status')
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
    Campos();
  }
}

function Campos() {
  let cmp = document.querySelector('#Campos');
  let Poscos = postco;
  $('select').formSelect();
  let SelPostcoA = `
                <div class="row"> 
                  <div id="postcosecha" class="input-field col s12 m6 l3 xl4">
                    <select>
                      <option value = "" class="undisable selected" > Postcosecha</option>`
  let SelPostcoB = "";
  for (let i = 0; i < Poscos.length; i++) {
    SelPostcoB += `\n                      <option value="${i}"> ${Poscos[i].Nombre} </option>"`

  }
  let SelPostcoC = `
                    </select>
                  <label>Poscosecha</label>
                </div>
                <div id="finca" class="input-field col s12 m6 l3 xl4">
                <select>
                  <option value="" class="undisable selected">Finca</option>
                  <option value="1"> Jardines </option>
                  <option value="2"> Florex</option>
                </select>
                <label>Finca</label>
              </div>
                </div >
                `
  console.log(SelPostcoA + SelPostcoB + SelPostcoC);
  cmp.innerHTML = "";
  cmp.innerHTML = SelPostcoA + SelPostcoB + SelPostcoC;
  cmp.innerHTML += `


    <div class="row">
      <div class="input-field col s3 m3 l3 x3">
        <input type="text" id="bloque" class="" ><label for="bloque">Bloque</label>
          <span class="helper-text" data-error="Bloque no existe" data-success="right"></span>
          </div>
        <div class="input-field col s3 m3 l3 x3">
          <input type="number" id="cantidad" class="" ><label for="cantidad">Cantidad</label>
            <span class="helper-text" data-error="Cantidad no existe" data-success="right"></span>
          </div>
          <div class="input-field col s3 m3 l3 x3">
            <input type="number" id="cama" class="" ><label for="cama">Cama</label>
              <span class="helper-text" data-error="Cama no existe" data-success="right"></span>
          </div>
            <div class="input-field col s3 m3 l3 x3">
              <input type="number" id="linea" class=""><label for="linea">Linea</label>
                <span class="helper-text" data-error="Linea no existe" data-success="right"></span>
          </div>
            </div>
            `
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
  let elem = document.getElementById('descargar');

  elem.download = "archivo.json";
  elem.href = "data:application/octet-stream," +
    encodeURIComponent(JSON.stringify(postco));
}
