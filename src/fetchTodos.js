"use strict";
const AWS = require("aws-sdk")
const fetchTodos = async (event) => {

  const dynamoDb= new AWS.DynamoDB.DocumentClient()
  const todos=[];
  
  try {
      const result = await dynamoDb.scan({TableName:"TodoTable"}).promise()
      console.log("this is the todo from the fetch lamdba", result)

      console.log("this is the  results from fetchtodos", result)

       todos=result.Items;
       
      
  } catch (error) {
      console.log(error)
  }


  return {
    statusCode: 200,
    body: JSON.stringify(todos),
  };
};


module.exports = {handler: fetchTodos}