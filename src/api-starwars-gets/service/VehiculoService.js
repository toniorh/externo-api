'use strict';
const axios = require('axios');

const ErrorConstants = require('../util/ErrorConstants');
const AppConstants = require('../util/AppConstants');
const Support = require('../util/Support');

module.exports.listar = async (event) => {
  let result = {};  
  try {
    // Se obtiene el ID opcional del GET
    const idOpcional = (event.pathParameters ? event.pathParameters.id : '');

    // Se consume el API STAR WARS (GET vehicles)
    const resultVehiculos = await axios.get(AppConstants.STARWARS_ENDPOINTS.URL_GET_VEHICLES + idOpcional);
    let resultVehiculosFormat = [];
    if (idOpcional !== '') {
      resultVehiculosFormat = [resultVehiculos.data];
    } else {
      resultVehiculosFormat = resultVehiculos.data.results;
    }
    result = {
      estado: 0,
      data: Support.transformarModeloVehiculo(resultVehiculosFormat),
    };
    return result;
  } catch (error) {
    console.error(error);
    result = {
      estado: ErrorConstants.ERROR_API_STARWARS_VEHICULO.CODIGO,
      mensaje: ErrorConstants.ERROR_API_STARWARS_VEHICULO.MENSAJE,
      error: (error.message ? error.message : error),
    };
    return result;
  }
};