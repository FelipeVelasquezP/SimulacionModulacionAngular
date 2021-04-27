
function traerValores(aux, A, f, df, faux) {
    var x = [];
    var y = [];
    a = -3;
    for (let i = 0; i <= 6000; i++) {
        if (aux == 1) {
            c = A * Math.sin(2 * Math.PI * f * a)
        } else if (aux == 2) {
            c = A * Math.cos(2 * Math.PI * f * a)
        } else if (aux == 3) {
            c = A * Math.cos((2 * Math.PI * f) * a + df * Math.sin(2 * Math.PI * faux * a))
        } else {
            c = A * Math.cos((2 * Math.PI * f) * a + df * Math.cos(2 * Math.PI * faux * a))
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
    var save = traerValores(2, vm, fm, null, null);

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
    var save = traerValores(2, vc, fc, null, null);

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
    var save = traerValores(2, vc, fc, null, null);

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


function graficaModuladaFm(Vm, m, fm, Vc, fc) {
    var ond = getDesviacionFM(Vm, m, fm) / fm;
    var save = traerValores(3, Vc, fc, ond, fm);

    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Modulada en Frecuencia',
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
    Plotly.newPlot('ModuladaFM', data, layout);
}

function graficaModuladaPm(Vm, m, fm, Vc, fc) {
    var save = traerValores(4, Vc, fc, m, fm);
    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Modulada en Fase',
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
    Plotly.newPlot('ModuladaPM', data, layout);

}



function getRandomColor() {
    var colores = [];
    var num = (Math.floor(Math.random() * 4) * 4).toString(16);
    var letters = ['0', 'F', num];
    var color = '#';

    for (var i = 0; i < 3; i++) {
        let pos = Math.floor(Math.random() * letters.length);
        color += letters[pos];
        letters.splice(pos, 1);

    }

    //para evitar que se repitan colores 
    if (colores.includes(color))
        return getRandomColor();
    else
        colores.push(color)

    return color;
}





function espectroFrecueciasFm(m, vc, fm, fc) {
    console.log(m, vc)
    var fLaterales = getBessel(m, vc);
    var datax = [];
    var datay = [];
    var auxdatax=[]
    var auxCol = [];
    var coloresFm = [];

    for (let i = fLaterales.length - 1; i > 0; i--) {
        datay.push(fLaterales[i])
        datax.push('f ' + i)
    }
    for (let i = 0; i < fLaterales.length; i++) {
        datax.push('f' + i);

    }
    for (let i = 0; i < datax.length; i++) {
        var indice = datax[i].charAt(datax[i].length - 1);
        auxdatax[i] = indice;

    }

    for (let i = 0; i < datax.length; i++) {
        var op;
        var ind=auxdatax[i];
        if (datax[i] == "f0") {
            op = fc;
        } else if(datax[i] == "f " + ind) {
            op = fc-fm*auxdatax[i];
        }else if(datax[i] == "f" + ind){
            op = fc+fm*auxdatax[i];
        }
        datax[i]=op;
    }
    datay = datay.concat(fLaterales)

    for (i = 0; i < datay.length / 2; i++) {
        coloresFm.push(getRandomColor());
    }
    for (let i = coloresFm.length; i >= 0; i--) {
        auxCol.push(coloresFm[i])
    }
    coloresFm = coloresFm.concat(auxCol);

    for (let i = 0; i < coloresFm.length; i++) {
        if (coloresFm[i + 1] == coloresFm[i] || coloresFm[i] == undefined || coloresFm[i - 1] == coloresFm[i]) {
            coloresFm.splice(i, 1);
        }
    }

    for (let i = 0; i < coloresFm.length; i++) {
        if (coloresFm[i + 1] == coloresFm[i] || coloresFm[i] == undefined || coloresFm[i - 1] == coloresFm[i]) {
            coloresFm.splice(i, 1);

        }
    }


    var trace1 = {
        type: 'bar',
        x: datax,
        y: datay,
        marker: {
            color: coloresFm,
            line: {
                width: 2
            }
        }
    };



    var data = [trace1];

    var layout = {
        title: 'Espectro de frecuencias de las bandas laterales en FM',
        font: { size: 18 },
        xaxis: {
            title: 'Frecuencia [Hz]',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Potencia [W]',
            titlefont: {
                color: 'black',
                size: 12
            }
        }
    };

    var config = { responsive: true }

    Plotly.newPlot('espectroFm', data, layout, config);

}





function espectroFrecueciasPm(m, vc, fm, fc) {
    console.log(m, vc)
    var fLaterales = getBessel(m, vc);
    var datax = [];
    var datay = [];
    var auxdatax = [];
    var auxCol = [];
    var coloresFm = [];

    for (let i = fLaterales.length - 1; i > 0; i--) {
        datay.push(fLaterales[i])
        datax.push('f ' + i)
    }
    for (let i = 0; i < fLaterales.length; i++) {
        datax.push('f' + i);
    }
    for (let i = 0; i < datax.length; i++) {
        var indice = datax[i].charAt(datax[i].length - 1);
        auxdatax[i] = indice;

    }
    for (let i = 0; i < datax.length; i++) {
        var op;
        var ind=auxdatax[i];
        if (datax[i] == "f0") {
            op = fc;
        } else if(datax[i] == "f " + ind) {
            op = fc-fm*auxdatax[i];
        }else if(datax[i] == "f" + ind){
            op = fc+fm*auxdatax[i];
        }
        datax[i]=op;
    }

    datay = datay.concat(fLaterales)

    for (i = 0; i < datay.length / 2; i++) {
        coloresFm.push(getRandomColor());
    }
    for (let i = coloresFm.length; i >= 0; i--) {
        auxCol.push(coloresFm[i])
    }
    coloresFm = coloresFm.concat(auxCol);

    for (let i = 0; i < coloresFm.length; i++) {
        if (coloresFm[i + 1] == coloresFm[i] || coloresFm[i] == undefined || coloresFm[i - 1] == coloresFm[i]) {
            coloresFm.splice(i, 1);
        }
    }

    for (let i = 0; i < coloresFm.length; i++) {
        if (coloresFm[i + 1] == coloresFm[i] || coloresFm[i] == undefined || coloresFm[i - 1] == coloresFm[i]) {
            coloresFm.splice(i, 1);

        }
    }


    var trace1 = {
        type: 'bar',
        x: datax,
        y: datay,
        marker: {
            color: coloresFm,
            line: {
                width: 2
            }
        }
    };



    var data = [trace1];

    var layout = {
        title: 'Espectro de frecuencias de las bandas laterales en Pm',
        font: { size: 18 },
        xaxis: {
            title: 'Frecuencia [Hz]',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Potencia [W]',
            titlefont: {
                color: 'black',
                size: 12
            }
        }
    };

    var config = { responsive: true }

    Plotly.newPlot('divEspectro', data, layout, config);

}