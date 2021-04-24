
$("#btn-calcular").click(function() {
  //Caputra de datos
  var Vc=parseFloat($("#Vc").val());
  var fc=parseFloat($("#fc").val());
  var Vm=parseFloat($("#Vm").val());
  var fm=parseFloat($("#fm").val());
  //Validación
  if (Vc && fc && Vm && fm) {
    graficaModuladoraFM(Vm, fm);
    graficaModuladoraPM(Vm,fm);
    $(".inputs").hide();
    $(".box-2").css("display","block")
    $("#anchoBanda").text(getAnchoBanda(Vm)+" Hz")

  } else {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa todos los datos'
      })
  }
});
