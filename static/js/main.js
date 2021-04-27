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
    graficaModuladaFm(Vm,mFM,fm,Vc,fc);
    graficaModuladaPm(Vm,mPM,fm,Vc,fc);
    espectroFrecueciasFm(mFM,Vc,fc);
    mostrarCalculos(Vc,fc,Vm,fm,mFM,mPM,res);
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
}
});

function mostrarCalculos(Vc,fc,Vm,fm,mFm,mPm,R) {
  $("#sensibilidadDesFM").append("K1="+getSensibilidadDesviacionFM(mFm,Vm,fm).toFixed(3)+" Hz/v");
  $("#sensibilidadDesPM").append("K="+getSensibilidadDesviacionPM(mPm,Vm).toFixed(3)+" rad/v");
  $("#DesviacionFM").append("Δ<i>f</i>= "+getDesviacionFM(Vm,mFm,fm).toFixed(3)+" Hz");
  $("#DesvicionPM").append("Δ<i>θ</i>= "+mPm+" rad");
  $("#porcFM").append("%mod= "+getPorcentajeModulacionFm(Vm,mFm,fm).toFixed(3)+"%");
  $("#porcPM").append("%mod= "+getPorcentajeModulacionPm(mPm,fm).toFixed(3)+"%");
  $("#anchoFM").text("B ="+ getAnchoBanda(fm,mFm)+" Hz");
  $("#anchoPM").text("B ="+ getAnchoBanda(fm,mFm)+" Hz");
  $("#anchominFM").text("Bmin ="+ getAnchominimo(getDesviacionFM(Vm,mFm,fm),fm)+" Hz");
  $("#anchominPM").text("Bmin ="+ getAnchominimo(getDesviacionFM(Vm,mFm,fm),fm)+" Hz");
  $("#relaFm").text("Dr = " + getDesviacionFM(getDesviacionFM(Vm,mFm,fm),fm));
  $("#potcFM").text("Pc = " + getPotenciaProm(Vc, R) + " W");
  getPotenciaComponentes(getBessel(mPm, Vc),Vc,R);
}
