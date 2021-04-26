$("#btn-calcular").click(function() {
  //Caputra de datos
  var Vc=parseFloat($("#Vc").val());
  var fc=parseFloat($("#fc").val());
  var Vm=parseFloat($("#Vm").val());
  var fm=parseFloat($("#fm").val());
  //Validación
  if (Vc && fc && Vm && fm) {
  var mFM=parseFloat($("#inputMFM").val());
  var mPM=parseFloat($("#inputMPM").val());
  var res=parseFloat($("#inputres").val());
    if (Vc && fc && Vm && fm && mFM && mPM && res) {
      graficaModuladoraFM(Vm, fm);
      graficaModuladoraPM(Vm,fm);
      graficaPortadoraFM(Vc,fc);
      graficaPortadoraPM(Vc,fc);
      mostrarCalculos(Vc,fc,Vm,fm,mFM,mPM,res);
      $(".inputs").hide();
      $("#anchoBanda").text(getAnchoBanda(Vm)+" Hz")
      $("#calculosSection").show();
      $("#GraficasSection").show();
    } else {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingresa todos los datos'
        })
    }
  }
})

function mostrarCalculos(Vc,fc,Vm,fm,mFm,mPm,R) {
  $("#sensibilidadDesFM").append("K1="+getSensibilidadDesviacionFM(mFm,Vm,fm));
  $("#DesviacionFM").append("Δ<i>f</i>= "+getDesviacionFM(Vm)+" Hz");
  $("#indiceModFm").append("m= "+getIndiceModulacionFM(fm,Vm));
}
