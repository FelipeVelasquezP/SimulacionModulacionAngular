function getAnchoBanda(fm) {
    var operacion = 2*(fm);
    return operacion;    
}

function getSensibilidadDesviacionFM(m,Vm,Fm) {
    kUno=(m*Fm)/Vm;
    return kUno;
}

function getDesviacionFM(Vm) {
    var des=4000*Vm;
    return Vm;
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
