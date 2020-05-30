'use strict';
const { uuid } = require('uuidv4');

const IncursionDB = require('./../db/IncursionDB');
const ErrorConstants = require('../util/ErrorConstants');

module.exports.crear = async (event) => {
  try {
    const item = {
      uuid: uuid(),
      canal: 'API_EXT', 
      json_incursion: event,
    }
    await IncursionDB.crear(item)
    return {
      estado: 0,
      mensaje: 'Registro insertado correctamente',
      data: item,
    }
  } catch (error) {
    console.error(error);
    result = {
      estado: ErrorConstants.ERROR_CREAR_INCURSION.CODIGO,
      mensaje: ErrorConstants.ERROR_CREAR_INCURSION.MENSAJE,
      error: (error.message ? error.message : error),
    };
    return result;
  }
};

module.exports.listar = async () => {
  let result = [];  
  try {
    result = await IncursionDB.listar();
    if (result.Items) {
      return {
        estado: 0,
        mensaje: 'Registros recuperados correctamente',
        data: result.Items,
      };
    } else {
      result = {
        estado: ErrorConstants.ERROR_LISTAR_INCURSION.CODIGO,
        mensaje: ErrorConstants.ERROR_LISTAR_INCURSION.MENSAJE,
        error: result,
      };
    }
    return result;
  } catch (error) {
    console.error(error);
    result = {
      estado: ErrorConstants.ERROR_LISTAR_INCURSION.CODIGO,
      mensaje: ErrorConstants.ERROR_LISTAR_INCURSION.MENSAJE,
      error: (error.message ? error.message : error),
    };
    return result;
  }
};