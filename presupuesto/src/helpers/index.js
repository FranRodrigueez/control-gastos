export const generarID = () => {
    const randomPart = Math.random().toString(36).substr(2, 10); // Selecciona solo los primeros 10 caracteres
    const fechaPart = Date.now().toString(36);

    return randomPart + fechaPart;
}


export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)

    const opciones = {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }

    return fechaNueva.toLocaleDateString("es-ES", opciones)
}