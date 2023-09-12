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
const nombre = prompt("Ingresa tu nombre")
const fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (formato: AAAA-MM-DD):");
const edadEnAños = calcularEdad(fechaNacimiento);
console.log(`Hola ${nombre}, tienes ${edadEnAños} años`);
