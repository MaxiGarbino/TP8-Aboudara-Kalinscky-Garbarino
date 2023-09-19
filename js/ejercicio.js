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

document.addEventListener("DOMContentLoaded", function () {
    function CalculadoraRecaudacion(cadena){
        var array = cadena.split(',');
        let suma = 0;
        for (var element of array){
            suma += parseFloat(element.replace(/[^\d.-]/g, ''));
        }
        let p = document.getElementById('CalculadoraRecaudacion');
        console.log(p.id);
        p.innerHTML = "Total de la recaudacion: " + suma.toFixed(2);   
    }
    CalculadoraRecaudacion("Pizza:15.50, Hamburguesa:8.75, Bebidas:4.25");
    function StringSeparador(cadena){
        cadena = cadena.replaceAll(',', '-');
        cadena = cadena.replaceAll(' ', '');
        let p = document.getElementById("StringSeparador");
        p.innerHTML = cadena;
    }
    StringSeparador("Simone, Broncas, Kalinscky, Abdul, Lerner, Mellebovsky");
    function CortarTexto(){
        
    }
});
