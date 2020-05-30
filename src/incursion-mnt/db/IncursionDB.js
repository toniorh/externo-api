const AWS = require('aws-sdk');

module.exports.crear = async (incursionItem) => {
    try {
        AWS.config.update({region: 'us-east-1'});
        const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
        const params = {
            TableName: process.env.TABLA_CSW_INCURSION,
            Item: incursionItem,
          };

        await docClient.put(params, function(err, params) {
            if (err) {
              console.error("ErrorDB PUT", err);
            } else {
              console.log("SuccessDB put", params);
            }
          });
        return true;   
    } catch (error) {
        console.error(error);
    }
};

module.exports.listar = async (list) => {
    try {
        AWS.config.update({region: 'us-east-1'});
        const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
        const params = {
            TableName: process.env.TABLA_CSW_INCURSION
          };
        const list = await docClient.scan(params).promise();
        return list;
    } catch (error) {
        console.error(error);
    }
};