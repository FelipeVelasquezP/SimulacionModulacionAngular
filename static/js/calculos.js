
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
    return des;
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