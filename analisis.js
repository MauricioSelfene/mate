//helpers
function esPar(numero) {
    return (numero % 2 === 0);
}


function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//

//mediana general
const salarioChile = chile.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosChileSorted = salarioChile.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB;
    }
)




function mediaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad -1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralChile = mediaSalarios(salariosChileSorted);

const sliceStart = (salariosChileSorted.length * 90) / 100;
const sliceCount = salariosChileSorted.length - sliceStart;

const salariosChileTop10 = salariosChileSorted.splice(
    sliceStart,
    sliceCount
);

const medianaTopChile = mediaSalarios(salariosChileTop10);


console.log(
    medianaGeneralChile,
    medianaTopChile
);
