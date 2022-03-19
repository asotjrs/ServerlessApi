"use strict";
const { v4 }  = require('uuid');
const AWS = require("aws-sdk")
const addTodo = async (event) => {

  const dynamoDb= new AWS.DynamoDB.DocumentClient()

  console.log("this is the todo from the event object", event.body)
  
  const {todo}=event.body
  const createdAt = new Date()
  const id = v4()

  const newTodo ={
    id,
    todo,
    createdAt,
  
  }
 try {
   
  await dynamoDb.put({
    TableName:"TodoTable",
    Item: newTodo
  }).promise()


 } catch (error) {
   console.log(error)
 }
  return {
    statusCode: 200,
    body: JSON.stringify(
     
    ),
  };
};


module.exports = {handler: addTodo}