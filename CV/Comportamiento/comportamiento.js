function mostrarContenido(param) {
    var lista = document.getElementsByClassName("content");

    for(let contador = 1; contador <= lista.length; contador++){
        if (param == contador) {
            document.getElementById(contador).style.display = "";
        } else {
            document.getElementById(contador).style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });