const Joi = require('@hapi/joi');

module.exports.validacionIncursion = (data) => {
    const schema = Joi.object().keys({
        planeta_destino: Joi.object()
            .keys({
                nombre: Joi.string().required(),
                distancia_ua: Joi.number().required(),
            }),
        naves: Joi.array().items(
            Joi.object().keys({
                nombre: Joi.string().required(),
                cantidad: Joi.number().required(),
            }).required(),
        ),
        vehiculos: Joi.array().items(
            Joi.object().keys({
                nombre: Joi.string().required(),
                cantidad: Joi.number().required(),
            }).required(),
        ),
    });
    const validate = schema.validate(data);
    return (validate.error && validate.error.details ? validate.error.details : null);
  };