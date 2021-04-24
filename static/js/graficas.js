
function traerValores(aux, A, f) {
    var x = [];
    var y = [];
    a = -5;
    for (let i = 0; i <= 7000; i++) {
        if(aux==1){
            c = A * Math.sin(2*Math.PI*f*a)
        }else if (aux==2){
            c = A * Math.cos(2*Math.PI*f*a)
        }
        x.push(a)
        y.push(c)
        a += 0.001;
    }
    valores = [{ x }, { y }]
    return valores;
}

function graficaModuladoraFM(vm, fm) {
    var save = traerValores(1, vm, fm);

    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Moduladora en frecuencia',
        xaxis: {
            title: 'Distance travelled along x-axis',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Distance travelled along y-axis',
            titlefont: {
                color: 'black',
                size: 12
            }
        }
    };
    Plotly.newPlot('ModuladoraFM', data, layout);
}


function graficaModuladoraPM(vm, fm) {
    var save = traerValores(2, vm, fm);

    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Moduladora en fase',
        xaxis: {
            title: 'Distance travelled along x-axis',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Distance travelled along y-axis',
            titlefont: {
                color: 'black',
                size: 12
            }
        }
    };
    Plotly.newPlot('ModuladorafM', data, layout);
}



function graficaPortadoraFM(vm, fm) {
    var save = traerValores(1, vm, fm);

    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Portadora en frecuencia',
        xaxis: {
            title: 'Distance travelled along x-axis',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Distance travelled along y-axis',
            titlefont: {
                color: 'black',
                size: 12
            }
        }
    };
    Plotly.newPlot('myDiv', data, layout);
}


function graficaPortadoraPM(vm, fm) {
    var save = traerValores(1, vm, fm);

    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Portadora en Fase',
        xaxis: {
            title: 'Distance travelled along x-axis',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Distance travelled along y-axis',
            titlefont: {
                color: 'black',
                size: 12
            }
        }
    };
    Plotly.newPlot('myDiv', data, layout);
}


function graficaModuladaFm(Vc,fc,Kuno,Vm,fm) {
    
}

function graficaModuladaPM(Vc,fc,K,Vm,fm) {
    
}