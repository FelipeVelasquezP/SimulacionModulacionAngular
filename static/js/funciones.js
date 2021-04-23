var btn_calculos = document.getElementById("btn-calcular")

function calcular () {
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

//BESSEL.besselj(x, n)
var r = BESSEL.besselj(10,9);
console.log(r)