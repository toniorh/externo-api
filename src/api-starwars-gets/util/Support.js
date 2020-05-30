
module.exports.transformarModeloPlaneta = (arrayModel) => {
    const result = []
    arrayModel.forEach((item)=>{
        result.push({
            nombre: item.name,
            periodo_rotacion: item.rotation_period,
            periodo_orbital: item.orbital_period,
            diametro: item.diameter,
            climate: item.clima,
            gravedad: item.gravity,
            terreno: item.terrain,
            superficie_agua: item.surface_water,
            poblacion: item.population,
            residentes: item.residents,
            peliculas: item.films,
            creacion: item.created,
            edicion: item.edited,
            url: item.url,
        });
    });
    return result;
};

module.exports.transformarModeloNaveEspacial = (arrayModel) => {
    const result = []
    arrayModel.forEach((item)=>{
        result.push({
            nombre: item.name,
            modelo: item.model,
            fabricante: item.manufacturer,
            costo_creditos: item.cost_in_credits,
            longitud: item.length,
            maxima_velocidad_atmosferica: item.max_atmosphering_speed,
            tripulacion: item.crew,
            pasajeros: item.passengers,
            capacidad_carga: item.cargo_capacity,
            consumibles: item.consumables,
            hipervelocidad: item.hyperdrive_rating,
            MGLT: item.MGLT,
            clase_nave: item.starship_class,
            pilotos: item.pilots,
            peliculas: item.films,
            creacion: item.created,
            edicion: item.edited,
            url: item.url,
        });
    });
    return result;
};

module.exports.transformarModeloVehiculo = (arrayModel) => {
    const result = []
    arrayModel.forEach((item)=>{
        result.push({
            nombre: item.name,
            modelo: item.model,
            fabricante: item.manufacturer,
            costo_creditos: item.cost_in_credits,
            longitud: item.length,
            maxima_velocidad_atmosferica: item.max_atmosphering_speed,
            tripulacion: item.crew,
            pasajeros: item.passengers,
            capacidad_carga: item.cargo_capacity,
            consumibles: item.consumables,
            clase_vehiculo: item.vehicle_class,
            pilotos: item.pilots,
            peliculas: item.films,
            creacion: item.created,
            edicion: item.edited,
            url: item.url,
        });
    });
    return result;
};