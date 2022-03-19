"use strict";
const { v4} = require("uuid")
const AWS = require("aws-sdk")
const addTodo = async (event) => {

  const dynamoDb= AWS.DynamoDB.DocumentClient()
  
  const {todo}=event.body
  const createdAt = new Date()
  const id = v4()

  const newTodo ={
    id,
    todo,
    createdAt,
  
  }
  await dynamoDb.put({
    TableName:"TodoTable",
    Item: newTodo
  })

  return {
    statusCode: 200,
    body: JSON.stringify(
     
    ),
  };
};


module.exports = {handler: addTodo}