const GeneralErrorConstants = require('../commons/ErrorConstants');

module.exports.requestFormat = (event) => {
    return JSON.parse(event.body);
};

module.exports.responseFormat = (body) => {
    return result = { statusCode: 200,
        body: JSON.stringify(body),
      };
};

module.exports.responseErrorEstructura = (errorEstructura) => {
    const validacion = {
        estado: GeneralErrorConstants.ERROR_ESTRUCTURA.CODIGO, 
        mensaje: GeneralErrorConstants.ERROR_ESTRUCTURA.MENSAJE,
        error: errorEstructura,
    }
    return result = { statusCode: 200,
        body: JSON.stringify({validacion}),
      };
};