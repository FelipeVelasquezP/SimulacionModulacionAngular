
function traerValores(aux, A, f, df) {
    var x = [];
    var y = [];
    a = -3;
    for (let i = 0; i <= 6000; i++) {
        if (aux == 1) {
            c = A * Math.sin(2 * Math.PI * f * a)
        } else if (aux == 2) {
            c = A * Math.cos(2 * Math.PI * f * a)
        } else if (aux == 3) {
            c = A * Math.cos((2 * Math.PI * f) * a + df * Math.sin(2 * Math.PI * f * a))
        } else {
            c = A * Math.cos((2 * Math.PI * f) * a + df * Math.cos(2 * Math.PI * f * a))
        }
        x.push(a)
        y.push(c)
        a += 0.001;
    }
    valores = [{ x }, { y }]
    return valores;
}

function graficaModuladoraFM(vm, fm) {
    var save = traerValores(1, vm, fm, null);

    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Moduladora en frecuencia',
        xaxis: {
            title: 'Tiempo [seg]',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Vm [V]',
            titlefont: {
                color: 'black',
                size: 12
            }
        }
    };
    Plotly.newPlot('ModuladoraFM', data, layout);
}


function graficaModuladoraPM(vm, fm) {
    var save = traerValores(2, vm, fm, null);

    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Moduladora en fase',
        xaxis: {
            title: 'Tiempo [seg]',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Vm [V]',
            titlefont: {
                color: 'black',
                size: 12
            }
        }
    };
    Plotly.newPlot('ModuladorafM', data, layout);
}



function graficaPortadoraFM(vc, fc) {
    var save = traerValores(2, vc, fc, null);

    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Portadora en frecuencia',
        xaxis: {
            title: 'Tiempo [seg]',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Vc [V]',
            titlefont: {
                color: 'black',
                size: 12
            }
        }
    };
    Plotly.newPlot('PortadoraFM', data, layout);
}


function graficaPortadoraPM(vc, fc) {
    var save = traerValores(2, vc, fc, null);

    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Portadora en Fase',
        xaxis: {
            title: 'Tiempo [seg]',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Vc [V]',
            titlefont: {
                color: 'black',
                size: 12
            }
        }
    };
    Plotly.newPlot('PortadoraPM', data, layout);
}


function graficaModuladaFm(Vc, fc, fm) {
    var save = traerValores(3, vc, fc, 2);

}

function graficaModuladaPM(Vc, fc, K, Vm, fm) {
    var save = traerValores(4, vc, fc, 2);

}

c = [19,8,3,4,2,0.5];
espectroFrecuecias(c);
function espectroFrecuecias(fLaterales) {
    var datax = [];
    var datay = [];
    for (let i = fLaterales.length - 1; i > 0; i--) {
        datay.push(fLaterales[i])
        datax.push('J\n'+i)
    }
    for (let i = 0; i < fLaterales.length; i++) {
        datax.push('J' + i);
    }
    datay = datay.concat(fLaterales)

    var trace1 = {
        type: 'bar',
        x: datax,
        y: datay,
        marker: {
            color: 'blue',
            line: {
                width: 2
            }
        }
      };

      var data = [ trace1 ];

      var layout = { 
        title: 'Espectro de frecuencias de las bandas laterales',
        font: {size: 18}
      };

      var config = {responsive: true}

      Plotly.newPlot('myDiv', data, layout, config );

}