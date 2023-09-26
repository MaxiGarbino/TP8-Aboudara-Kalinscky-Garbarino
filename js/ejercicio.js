//funcion 1
function calcularEdad(fechaNacimiento) {
    fechaNacimiento = new Date(fechaNacimiento);
    const fechaHoy = new Date();

    const años = fechaHoy.getFullYear() - fechaNacimiento.getFullYear();
    const mesActual = fechaHoy.getMonth();
    const mesNacimiento = fechaNacimiento.getMonth();
    const diaActual = fechaHoy.getDate();
    const diaNacimiento = fechaNacimiento.getDate();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        return (años - 1);
    } else {
        return años;
    }
}

const nombre = prompt("Ingresa tu nombre");
const fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (formato: AAAA-MM-DD):");
const edadEnAños = calcularEdad(fechaNacimiento);
console.log(`Hola ${nombre}, tienes ${edadEnAños} años`);

//funcion 2
function tirandoFruta() {
    const frutas = ["Pera", "Manzana", "Frutilla", "Banana", "Kiwi", "Naranja", "Limon", "Melon", "Sandia", "Mandarina"];
    for (let i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    }
    const frutaUsuario = prompt("Ingrese una fruta: ");
    const existeFruta = frutas.find(frutas => frutas == frutaUsuario);
    if (existeFruta) console.log("Si, tenemos " + frutaUsuario);
    else console.log("No, no tenemos " + frutaUsuario);

}
tirandoFruta();

//function 3
function comparandoTiposYDatos() {
    console.log("10 es igual a '10' con == ");
    console.log(10 == '10');
    console.log("Comparar si 10 es igual a '10' con ===. ¿Qué diferencias encontrás?");
    console.log(10 === '10');
    console.log("La diferencia que encontramos es que en el '===' se compara todo del dato, si tienen el mismo tipo de dato, siendo el '==' para comparar solamente el contenido, y el '===' para comparar todo");
    console.log(typeof 10.6);
    console.log(true == 1);
    console.log("Comcluimos que en javascript los tipos de datos solo pueden tener dos valores, siendo 0 False y 1 siendo true");
}
comparandoTiposYDatos();

//funcion 4
function yoObjeto() {
    const ciudad = {
        nombre: "CABA",
        fechaFundacion: new Date(2000 - 12 - 10),
        poblacion: 180000,
        extencion: "10 m3"
    }
    for (const key in ciudad) {
        console.log(`${key} : ${ciudad[key]}`);
    }
}
yoObjeto();

//funcion 5
function dobleElementos(arrayNum) {
    const dobleArrayNum = arrayNum.map(arrayNum => arrayNum * 2);
    console.log(dobleArrayNum);
}
const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
dobleElementos(arrayNum);

//funcion 6
function trianguloAsteriscos() {
    let numPisos = 5;
    for (let i = 0; i < numPisos; i++) {
        let piso = '';
        for (let j = 0; j < i + 1; j++) {
            piso = piso + '*';
        }
        console.log(piso)
    }
    for (let i = 0; i < numPisos; i++) {
        let piso = '-';
        for (let j = 0; j < i + 1; j++) {
            piso = piso + '*';
        }
        console.log(piso)
        console.log(piso);
    }
}
function trianguloAsteriscos2(){
    let numPisos= 11;
    let cantGuion = numPisos-1;
    for (let i = 0; i < Math.ceil(numPisos/2); i++) {
        let piso = '';
        for (let j = 0; j < Math.floor(cantGuion/2); j++) {
            piso += '-';
        }
        for(let x = 0; x < numPisos-cantGuion; x++) piso += '*';
        for (let j = 0; j < Math.floor(cantGuion/2); j++) {
            piso += '-';
        }
        cantGuion = cantGuion - 2;
        console.log(piso);
    }
    
}
trianguloAsteriscos();
trianguloAsteriscos2();

document.addEventListener("DOMContentLoaded", function () {

    nombresConA();
    //funcion 7

    //analia, maxi, abou, chino, simone, anashe, ANAahe, lol, raian, aian, 189a
    function nombresConA() {
        let p = document.getElementById('funcionSiete');
        const nombres = prompt("Ingrese una lista de nombres separados por coma ',' ")
        const arrayNombres = nombres.split(',')
        for (let i = 0; i < arrayNombres.length; i++) {
            if (arrayNombres[i][0] === 'a' || arrayNombres[i][0] === 'A') p.innerHTML += arrayNombres[i];
        }
    }
    //funcion 8

    const cadenashe = prompt('Ingrese una cadena');
    const palabra = prompt('Ingrese la palabra que desea que sea reemplazada');
    const nuevaPalabra = prompt('Ingrese la nueva palabra');
    reemplazarPalabras(cadenashe, palabra, nuevaPalabra);
    function reemplazarPalabras(cadenashe, palabra, nuevaPalabra) {
        cadena = cadena.replaceAll('palabra', 'nuevaPalabra');
        let p = document.getElementById("reemplazarPalabra");
        p.innerHTML = cadena;
    }
    //funcion 9
    const cadena = prompt("ingrese una cadena");
    const cant = prompt("Ingrese un numero");
    CortarTexto(cadena, cant);
    function CortarTexto(cadena, cant) {
        let p = document.getElementById('CortarTexto');
        p.innerHTML = cadena.slice(0, cant);
    }

    //funcion 10

    function StringSeparador(cadena) {
        cadena = cadena.replaceAll(',', '-');
        cadena = cadena.replaceAll(' ', '');
        let p = document.getElementById("StringSeparador");
        p.innerHTML = cadena;
    }
    StringSeparador("Simone, Bronsztein, Kalinscky, Abdul, Lerner, Mellebovsky");

    //funcion 11
    function CalculadoraRecaudacion(cadena) {
        var array = cadena.split(',');
        let suma = 0;
        for (var element of array) {
            suma += parseFloat(element.replace(/[^\d.-]/g, ''));
        }
        let p = document.getElementById('CalculadoraRecaudacion');
        console.log(p.id);
        p.innerHTML = "Total de la recaudacion: " + suma.toFixed(2);
    }
    CalculadoraRecaudacion("Pizza:15.50, Hamburguesa:8.75, Bebidas:4.25");
    

    
});
