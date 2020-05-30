'use strict';
const { uuid } = require('uuidv4');

const IncursionDB = require('./../db/IncursionDB');
const ErrorConstants = require('../util/ErrorConstants');
const AppConstants = require('../util/AppConstants');
const Support = require('../util/Support');

module.exports.crear = async (event) => {
  let result = {};  
  try {
    console.log('event: ',event);
    const item = {
      uuid: uuid(),
      json_incursion: event,
    }
    await IncursionDB.crear(item)
    return event;
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