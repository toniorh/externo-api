const AWS = require('aws-sdk');

// const BATCH_OPERATIONk_MAX_LENGTH = 25;
const TRANSACTION_MAX_LENGTH = 15;

class DynamoDBConnection {
  static async callSingleOperation(action, params) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    try {
      return await dynamoDb[action](params).promise();
    } catch (error) {
      console.error(error);
    }
  }

  static async callBatchOperation(action, params, backoffTime = 1) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    try {
      return await dynamoDb[action](params).promise();
    } catch (error) {
      console.error(error);
      if (error.code === 'ProvisionedThroughputExceededException') {
        this._backoff(backoffTime);
        return this.callBatchOperation(action, params, (backoffTime * 2));
      }
    }
  }

  static _backoff(time) {
    const ms = time * 100;
    const start = (new Date()).getTime();
    while (((new Date()).getTime() - start) < ms) {
      // esperando
    }
  }

  static async callTransaction(action, params) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    try {
      let paramsBlock = [];
      const transactionToCall = [];
      if (params.TransactItems) {
        if (params.TransactItems.length > TRANSACTION_MAX_LENGTH) {
          paramsBlock = this.buildRangesParams(params, TRANSACTION_MAX_LENGTH);
        } else {
          paramsBlock[0] = params.TransactItems;
        }
        paramsBlock.forEach((item) => {
          params.TransactItems = item;
          transactionToCall.push(dynamoDb[action](params).promise());
        });
      }
      return await Promise.all(transactionToCall);
    } catch (error) {
      console.error(error);
    }
  }

  static buildRangesParams(array, cantItems) {
    const ranges = [];
    let loops = Math.floor(array.length / cantItems);
    if (array.length % cantItems > 0) loops += 1;
    for (let i = 0; i < loops; i += 1) {
      ranges.push(array.slice(cantItems * i, cantItems * (i + 1)));
    }
    return ranges;
  }
}

module.exports = DynamoDBConnection;
