//Caputra de datos
console.log("hola")

$("#btn-calcular").click(function() {
  var Vc=parseFloat($("#Vc").val());
  var fc=parseFloat($("#fc").val());
  var Vm=parseFloat($("#Vm").val());
  var fm=parseFloat($("#fm").val());
  if (Vc && fc && Vm && fm) {
    graficaModuladoraFM(Vm, fm);
    graficaModuladoraPM(Vm,fm);
  } else {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa todos los datos'
      })
  }
});