function getAnchoBanda(fm,mFm) {
    var operacion = 2*(mFm,fm);
    return operacion;    
}

function getSensibilidadDesviacionFM(m,Vm,Fm) {
    kUno=(m*Fm)/Vm;
    return kUno;
}

function getDesviacionFM(Vm,m,fm) {
    var des=getSensibilidadDesviacionFM(m,Vm,fm)*Vm;
    return des;
}

function getDatosPM(Vm) {
    var des=4000*Vm;
    return Vm;
}

function getIndiceModulacionFM(fm,Vm) {
    var ind=fm*getDesviacionFM(Vm);
    return ind;
}

function getPorcentajeIndice(m) {
    var por=m*100;
    return por;
}

function getIndiceModulacion(Em,Ec) {
    var operacion=1;
    return operacion;    
}

function getAnchominimo(f, fm) {
    var op = 2*(f+fm);
    return op.toFixed(3)
}

function getDesviacionFM(f,fm) {
    var op = f/fm
    return op.toFixed(3);
}

function getPotenciaProm(Vc,R){
    var op = (Vc*Vc)/(2*R)
    return op.toFixed(3);
}

function getPotenciaComponentes (j,Vc,R) {
    var potenciaT = 0
    for (let index = 0; index < j.length; index++) {
        var potencia = (j[index]*Vc)/(2*R)
        var txt = '<div class="col-4 br"> <div class="box-1 hod"> <h2> <b>Potencia componente J'+ index +'</b></h2><h5 id="porcFM" style="text-align: center;"> J' + index + ": " + potencia.toFixed(3) + ' W </h5></div></div>'
        $(".potencias").append(txt)       
        potenciaT += potencia
    }
    $(".potencias").append('<div class="col-4 br"> <div class="box-1 hod"> <h2> <b>Potencia total: </b></h2><h5 id="porcFM" style="text-align: center;"> Potencia t: ' + potenciaT.toFixed(3) + ' W </h5></div></div>')
}