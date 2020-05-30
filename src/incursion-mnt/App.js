'use strict';
const AppSchema = require('../commons/AppSchema');
const GeneralErrorConstants = require('../commons/ErrorConstants');
const Validator = require('./util/Validator');
const IncursionService = require('./service/IncursionService');

module.exports.crearIncursion = async (event) => {
  try {
    const request = AppSchema.requestFormat(event);
    const val = Validator.validacionIncursion(request);
    if (val) {
      return AppSchema.responseErrorEstructura(val);
    }

    const result = await IncursionService.crear(request); 
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