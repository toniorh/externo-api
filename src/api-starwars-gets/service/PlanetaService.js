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

    // Se consume el API STAR WARS (GET planets)
    const resultPlanetas = await axios.get(AppConstants.STARWARS_ENDPOINTS.URL_GET_PLANETS + idOpcional);
    let resultPlanetasFormat = [];
    if (idOpcional !== '') {
      resultPlanetasFormat = [resultPlanetas.data];
    } else {
      resultPlanetasFormat = resultPlanetas.data.results;
    }
    result = {
      estado: 0,
      data: Support.transformarModeloPlaneta(resultPlanetasFormat),
    };
    return result;
  } catch (error) {
    console.error(error);
    result = {
      estado: ErrorConstants.ERROR_API_STARWARS_PLANETA.CODIGO,
      mensaje: ErrorConstants.ERROR_API_STARWARS_PLANETA.MENSAJE,
      error: (error.message ? error.message : error),
    };
    return result; 
  }
};
