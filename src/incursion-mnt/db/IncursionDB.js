const DynamoDBConnection = require('./../../commons/DynamoDBConnection')

module.exports.crear = async (incursionItem) => {
    try {
        const params = {
            TableName: 'CSW_INCURSIONES',
            Item: incursionItem,
          };
          return await DynamoDBConnection.callSingleOperation('put', params);        
    } catch (error) {
        console.error(error);
    }
};