var galeria = [
  { foto: "galeria1.jpg", texto: "Imagen 1" },
  { foto: "galeria2.jpg", texto: "Imagen 2" },
  { foto: "galeria3.jpg", texto: "Imagen 3" },
];

var indices = [0, 1, 2];

function incrementarIndices() {
  for (var i = 0; i < indices.length; i++) {
    indices[i]++;
    if (indices[i] == indices.length) {
      indices[i] = 0;
    }
  }
}

function decrementarIndices() {
  for (var i = 0; i < indices.length; i++) {
    indices[i]--;
    if (indices[i] == indices.length) {
      indices[i] = 0;
    }
  }
}

function anterior() {
  decrementarIndices();
  mostrarImagenes();
}

function proxima() {
  incrementarIndices();
  mostrarImagenes();
}

function mostrarImagenes() {
  for (var i = 0; i < indices.length; i++) {
    var foto = document.getElementById("foto" + i);
    if (foto) foto.src = "assets/imagenes/" + galeria[indices[i]].foto;
    var texto = document.getElementById("texto" + i);
    if (texto) texto.innerText = galeria[indices[i]].texto;
  }
}

mostrarImagenes();

/*var indice = 0;

function mostrarFoto() {
  var foto = document.getElementById("galeria-foto");
  if (foto) {
    foto.src = "assets/imagenes/" + galeria[indice].foto;
  }

  var texto = document.getElementById("galeria-texto");
  if (texto) {
    texto.innerText = galeria[indice].texto;
  }
}

function anterior() {
  indice--;
  if (indice < 0) indice = galeria.length - 1;
  mostrarFoto();
}

function proxima() {
  indice++;
  if (indice == galeria.length) indice = 0;
  mostrarFoto();
}

mostrarFoto();
*/
