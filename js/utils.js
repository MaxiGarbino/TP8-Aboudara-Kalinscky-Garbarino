function funcion1() {
    const nombre = prompt("Ingresa tu nombre");
    const fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (formato: AAAA-MM-DD):");
    const edadEnAños = calcularEdad(fechaNacimiento);
    console.log(`Hola ${nombre}, tienes ${edadEnAños} años`);
};


function funcion2() {
    const frutaUsuario = prompt("Ingrese una fruta: ");
    tirandoFruta(frutaUsuario);
};

function funcion3() {
    comparandoTiposYDatos();
};

function funcion4() {
    yoObjeto();
};

function funcion5() {
    dobleElementos(arrayNum);
};

function funcion6() {
    trianguloAsteriscos();
};

function funcion7() {
    trianguloAsteriscos2();
};

function funcion8() {
    const nombres = prompt("Ingrese una lista de nombres separados por coma ',' ")
    nombresConA(nombres);
};

function funcion9() {
    const cadena = prompt('Ingrese una cadena');
    const palabra = prompt('Ingrese la palabra que desea que sea reemplazada');
    const nuevaPalabra = prompt('Ingrese la nueva palabra');
    reemplazarPalabras();
};

function funcion10() {
    const cadena = prompt("Ingrese una cadena");
    const cant = prompt("Ingrese un número");
    CortarTexto(cadena, cant);
};

function funcion11() {
    StringSeparador("Simone, Bronsztein, Kalinscky, Abdul, Lerner, Mellebovsky");
};

function funcion12() {
    CalculadoraRecaudacion("Pizza:15.50, Hamburguesa:8.75, Bebidas:4.25");
};