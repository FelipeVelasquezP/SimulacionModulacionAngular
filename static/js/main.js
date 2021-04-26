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
    graficaPortadoraFM(Vc,fc);
    graficaPortadoraPM(Vc,fc);
    mostrarCalculos(Vc,fc,Vm,fm);
    $(".inputs").hide();
    $("#calculosSection").show();
    $("#GraficasSection").show();
  } else {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa todos los datos'
      })
  }
});


function mostrarCalculos(Vc,fc,Vm,fm) {
  $("#sensibilidadDesFM").append("Por definir");
  $("#DesviacionFM").append("Δ<i>f</i>= "+getDesviacionFM(Vm)+" Hz");
  $("#indiceModFm").append("m= "+getIndiceModulacionFM(fm,Vm));

}