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
    mostrarmisDatos(Vc,fc,Vm,fm,mFM,mPM,res);
    mostrarCalculos(Vc,fc,Vm,fm,mFM,mPM,res);
    $(".inputs").hide();
    $("#rta").show();
    $("#btn-new").show()
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
  $("#sensibilidadDesFM").append("K1 = "+getSensibilidadDesviacionFM(mFm,Vm,fm).toFixed(3)+" Hz/v");
  $("#sensibilidadDesPM").append("K = "+getSensibilidadDesviacionPM(mPm,Vm).toFixed(3)+" rad/v");
  $("#DesviacionFM").append("Δ<i>f</i> = "+getDesviacionFM(Vm,mFm,fm)+" Hz");
  $("#DesvicionPM").append("Δ<i>θ</i> = "+mPm+" rad");
  $("#porcFM").append("%mod = "+getPorcentajeModulacionFm(Vm,mFm,fm).toFixed(3)+"%");
  $("#porcPM").append("%mod = "+getPorcentajeModulacionPm(mPm,fm).toFixed(3)+"%");
  $("#anchoFM").text("B = "+ getAnchoBanda(fm,mFm)+" Hz");
  $("#anchoPM").text("B = "+ getAnchoBanda(fm,mFm)+" Hz");
  $("#anchominFM").text("Bmin = "+ getAnchominimo(getDesviacionFM(Vm,mFm,fm),fm)+" Hz");
  $("#anchominPM").text("Bmin = "+ getAnchominimo(getDesviacionFM(Vm,mFm,fm),fm)+" Hz");
  $("#relaFm").text("DR = " + getDesviacionFM(getDesviacionFM(Vm,mFm,fm),fm));
  $("#potcFM").text("Pc = " + getPotenciaProm(Vc, R) + " W");
  getParesPM(getBessel2(mPm));
  getPotenciaComponentesPM(getBessel(mPm, Vc),Vc,R);
  getParesFM(getBessel2(mFm));
  getPotenciaComponentesFM(getBessel(mFm, Vm),Vm,R);
}


function mostrarmisDatos(Vc,fc,Vm,fm,mFm,mPm,R) {
  console.log(Vc,fc,Vm,fm,mFm,mPm,R)
  $("#vc").append("Vc = "  + Vc+" V");
  $("#vm").append("Vm = " + Vm+" V");
  $("#campofc").append("<i>fc</i> = "+fc+" Hz");
  $("#campofm").append("<i>fm</i> =  " + fm + " Hz");
  $("#mfm").append("m [FM] = " + mFm);
  $("#mpm").append("m [PM] = " + mPm );
  $("#resistencia").append("R = " + R +" Ω");
}

//Actauliza la página
$("#btn-new").click(function () {
  location.reload()
})