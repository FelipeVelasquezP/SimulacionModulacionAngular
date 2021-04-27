function getAnchoBanda(fm,mFm) {
    var operacion = 2*(mFm,fm);
    return operacion;    
}

function getSensibilidadDesviacionFM(m,Vm,Fm) {
    kUno=(m*Fm)/Vm;
    return kUno;
}

function getSensibilidadDesviacionPM(m,Vm) {
    k=m/Vm;
    return k;
}
function getDesviacionFM(Vm,m,fm) {
    var des=getSensibilidadDesviacionFM(m,Vm,fm)*Vm;
    return des.toFixed(3);
}



function getPorcentajeModulacionFm(Vm,m,fm) {
    fmax=getDesviacionFM(Vm,m,fm);
    var por=(fm/fmax)*100;
    return por;
}

function getPorcentajeModulacionPm(mPm,fm) {
    var porP=(fm/mPm)*100;
    return porP;
}
function getIndiceModulacion(Em,Ec) {
    var operacion=1;
    return operacion;    
}

function getAnchominimo(f, fm) {
    console.log(f,fm)
    var op = 2*(parseInt(f)+fm);
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

function getParesPM(j){
    for (let index = 0; index < j.length; index++) {
        var txt = '<div class="col-4 br"> <div class="box-1 hod"> <h2> <b>Componente J'+ index +'</b></h2><h5 id="porcFM" style="text-align: center;"> J' + index + " = " + j[index].toFixed(3) + ' V </h5></div></div>'
        $(".paresPM").append(txt)       
    }
}
function getPotenciaComponentesPM(p,Vc,R) {
    var potenciaT = 0
    for (let index = 0; index < p.length; index++) {
        var potencia = (p[index]*Vc)/(2*R)
        var txt = '<div class="col-4 br"> <div class="box-1 hod"> <h2> <b>Potencia componente J'+ index +'</b></h2><h5 id="porcFM" style="text-align: center;"> P' + index + " = " + potencia.toFixed(3) + ' W </h5></div></div>'
        $(".potenciasPM").append(txt)       
        potenciaT += potencia
    }
    $(".potenciasPM").append('<div class="col-4 br"> <div class="box-1 hod"> <h2> <b>Potencia total: </b></h2><h5 id="porcFM" style="text-align: center;"> Pt =  ' + potenciaT.toFixed(3) + ' W </h5></div></div>')
}

function getParesFM(j){
    for (let index = 0; index < j.length; index++) {
        var txt = '<div class="col-4 br"> <div class="box-1 hod"> <h2> <b>Componente J'+ index +'</b></h2><h5 id="porcFM" style="text-align: center;"> J' + index + " = " + j[index].toFixed(3) + ' V </h5></div></div>'
        $(".paresFM").append(txt)       
    }
}
function getPotenciaComponentesFM(p,Vm,R) {
    var potenciaT = 0
    for (let index = 0; index < p.length; index++) {
        var potencia = (p[index]*Vm)/(2*R)
        var txt = '<div class="col-4 br"> <div class="box-1 hod"> <h2> <b>Potencia componente J'+ index +'</b></h2><h5 id="porcFM" style="text-align: center;"> P' + index + " = " + potencia.toFixed(3) + ' W </h5></div></div>'
        $(".potenciasFM").append(txt)       
        potenciaT += potencia
    }
    $(".potenciasFM").append('<div class="col-4 br"> <div class="box-1 hod"> <h2> <b>Potencia total: </b></h2><h5 id="porcFM" style="text-align: center;"> Pt =  ' + potenciaT.toFixed(3) + ' W </h5></div></div>')
}
