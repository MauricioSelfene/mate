
const lista1 = [
    1,
    2,
    3,
    4,
    5,
    5,
    3,
    4,
    6,
    2,
    4,
    7
];

//creamos un obj vacio
const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        }
        else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Aray = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);

const moda =  lista1Aray[lista1Aray.length - 1];