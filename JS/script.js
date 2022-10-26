const saludo = [
    "Bienvenido nuestra tienda de Juegos.",
    "Gracias por utilizar la app.",
];

alert(saludo[0]);

class Juego {

    constructor(titulo, anio, genero, valoracion, id) {
        this.titulo = titulo;
        this.anio = parseInt(anio);
        this.genero = genero;
        this.valoracion = parseInt(valoracion);
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    }

    valorar(valoracion) {
        this.valoracion = valoracion;
    }

}

const juegos = [
    new Juego('Counter Strike', 2001, 'Shooter', 10, 1),
    new Juego('NFS Underground 2', 2004, 'Autos', 10, 2),
    new Juego('Revolt', 1999, 'Autos', 8, 3),
    new Juego('Ages of empires 2', 1999, 'Estrategia', 7, 4),
    new Juego('FarCry 4', 2008, 'Shooter', 7, 5),
    new Juego('NFS Mostwanted', 2005, 'Autos', 9, 6),
    new Juego('Dragon Ball Z', 2003, 'Peleas', 10, 7)
]

//--------------------Pedir que se ingresen juegos nuevos y sumarlos al array-----------------------//

let continuar = true;

while (continuar) {
    let ingreso = prompt('Ingresa los datos del Juego: Título, Año, Género, Puntaje del 1 al 10. Separá con una barra diagonal (/). Presioná X para finalizar');

    if (ingreso.toUpperCase() == 'X') {
        continuar = false;
        break;
    }

    let datos = ingreso.split('/');
    const juego = new Juego(datos[0], datos[1], datos[2], datos[3]);

    juegos.push(juego);

    juego.asignarId(juegos);

    console.log(juegos)
}

//--------------------------Ordenar el array de acuerdo a lo que se elija-----------------------------//

let criterio = prompt('Elegí el criterio deseado:\n1 - Título (A a Z) \n2 - Título (Z a A)\n3 - Mejor a peor puntuado \n4 - Fecha de publicación (Más viejo a más nuevo)');

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0);


    switch (criterio) {
        case '1':
            let nombreAscendente = arrayOrdenado.sort((a, b) => a.titulo.localeCompare(b.titulo));
            return nombreAscendente;
        case '2':
            let nombreDescendente = arrayOrdenado.sort((a, b) => b.titulo.localeCompare(a.titulo));
            return nombreDescendente;
        case '3':
            return arrayOrdenado.sort((a, b) => b.valoracion - a.valoracion);
        case '4':
            return arrayOrdenado.sort((a, b) => a.anio - b.anio);
        default:
            alert('No es un criterio válido');
            break;
    }
}

//----------------------Fin de ordenar el array de acuerdo a lo que se elija----------------------//

function crearStringResultado(array) {
    let info = '';

    array.forEach(elemento => {
        info += 'Título: ' + elemento.titulo + '\nAño de publicación: ' + elemento.anio + '\nValoración: ' + elemento.valoracion + ' puntos.\n\n'
    })

    return info;
}

//--------------------------Fin de crear el string con los resultados-----------------------------//

alert(crearStringResultado(ordenar(criterio, juegos)));



//--------------------------Filtrar Juegos de acuerdo al Titulo-----------------------------//
let tituloElegido = prompt('Escribí el título del juego para que te mostremos las opciones');

const filtrado = juegos.filter((juego) => juego.titulo.toLowerCase().includes(tituloElegido.toLowerCase()))

//----------------------Fin de filtrar Juegos de acuerdo al puntaje-------------------------//


//--------------------------Mostrar Juegos filtrados de acuerdo al Puntaje-----------------------------//

if (filtrado.length == 0) {
    alert('Lo sentimos. No encontramos coincidencias en nuestro catálogo');
} else {
    const imprimible = filtrado.map((juego) => juego.titulo);
    alert('Los juegos de nuestro catálogo que coinciden parcial o totalmente con esta búsqueda, son:\n- ' + imprimible.join('\n- '));
}

alert(saludo[1]);