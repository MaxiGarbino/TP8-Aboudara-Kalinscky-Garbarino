function calcularEdad(fecha){
    let fechaHoy = new Date();
    fechaHoy = Date.parse(fechaHoy);
    fecha = Date.parse(fecha);
    console.log(fechaHoy,fecha);
}
calcularEdad("2006-10-06Z14:55:00 GMT-3")