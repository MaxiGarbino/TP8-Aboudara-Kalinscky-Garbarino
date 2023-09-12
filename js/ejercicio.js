function calcularEdad(fecha){
    let fechaHoy = new Date();
    fechaHoy = Date.parse(fechaHoy);
    fecha = Date.parse(fecha);
    console.log(fechaHoy,fecha);
}

function CalculadoraRecaudacion(cadena){
    var array = cadena.split(',');
    let suma = 0;
    for (var element of array){
        suma += parseFloat(element.replace(/[^\d.-]/g, ''));
    }
    console.log(suma);
}
calcularEdad("2006-10-06Z14:55:00 GMT-3");
CalculadoraRecaudacion("Pizza:15.50, Hamburguesa:8.75, Bebidas:4.25");