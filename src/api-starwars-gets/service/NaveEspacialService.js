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

    // Se consume el API STAR WARS (GET starships)
    const resultNavesEspaciales = await axios.get(AppConstants.STARWARS_ENDPOINTS.URL_GET_STARSHIPS + idOpcional);
    let resultNavesEspacialesFormat = [];
    if (idOpcional !== '') {
      resultNavesEspacialesFormat = [resultNavesEspaciales.data];
    } else {
      resultNavesEspacialesFormat = resultNavesEspaciales.data.results;
    }
    result = {
      estado: 0,
      data: Support.transformarModeloNaveEspacial(resultNavesEspacialesFormat),
    };
    return result;
  } catch (error) {
    console.error(error);
    result = {
      estado: ErrorConstants.ERROR_API_STARWARS_NAVE_ESPACIAL.CODIGO,
      mensaje: ErrorConstants.ERROR_API_STARWARS_NAVE_ESPACIAL.MENSAJE,
      error: (error.message ? error.message : error),
    };
    return result;
  }
};