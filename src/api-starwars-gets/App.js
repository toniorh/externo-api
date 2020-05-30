'use strict';
const AppSchema = require('../commons/AppSchema');
const GeneralErrorConstants = require('../commons/ErrorConstants');
const PlanetaService = require('./service/PlanetaService');
const NaveEspacialService = require('./service/NaveEspacialService');
const VehiculoService = require('./service/VehiculoService');

module.exports.listarPlanetas = async (event) => {
  try {
    const result = await PlanetaService.listar(event); 
    return AppSchema.responseFormat(result);
  } catch (error) {
    console.error(error);
    result = {
      estado: GeneralErrorConstants.ERROR_CONTROLLER.CODIGO,
      mensaje: GeneralErrorConstants.ERROR_CONTROLLER.MENSAJE,
      error: (error.message ? error.message : error),
    };
    return AppSchema.responseFormat(result);
  }
};

module.exports.listarNavesEspaciales = async (event) => {
  try {
    const result = await NaveEspacialService.listar(event); 
    return AppSchema.responseFormat(result);
  } catch (error) {
    console.error(error);
    result = {
      estado: GeneralErrorConstants.ERROR_CONTROLLER.CODIGO,
      mensaje: GeneralErrorConstants.ERROR_CONTROLLER.MENSAJE,
      error: (error.message ? error.message : error),
    };
    return AppSchema.responseFormat(result);
  }
};

module.exports.listarVehiculos = async (event) => {
  try {
    const result = await VehiculoService.listar(event); 
    return AppSchema.responseFormat(result);
  } catch (error) {
    console.error(error);
    result = {
      estado: GeneralErrorConstants.ERROR_CONTROLLER.CODIGO,
      mensaje: GeneralErrorConstants.ERROR_CONTROLLER.MENSAJE,
      error: (error.message ? error.message : error),
    };
    return AppSchema.responseFormat(result);
  }
};