var btn_calculos = document.getElementById("btn-calcular")

function calcular() {
    swal("Datos cargados", "Las amplitudes y frecuencias han sido leidas correctamente", "success");
    // Swal.fire(
    //     'Good job!',
    //     'You clicked the button!',
    //     'success'
    //   )
}

/* bessel.js (C) 2013-present SheetJS -- http://sheetjs.com */
/* vim: set ts=2: */
/*exported BESSEL */

//BESSEL.besselj(m, n)
function getBessel(m) {
    var J = [];
    for (let i = 0; i < 14; i++) {
        var r = BESSEL.besselj(m, i)
        if (r > 0.01 || r < -0.01) {
            J.push(r);
        }
    }
    espectroFrecuecias(J)
}