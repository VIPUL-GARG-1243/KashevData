'use strict';
 
const express = require("express");
const route = express.Router();
const ADODB = require('node-adodb');
const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=Weighing_API.mdb;');

let users
async function query() {
    try {
      users = await connection.query('SELECT * FROM [API_DATA];');
   
    } catch (error) {
      console.error(error);
    }
  }
   
  query();

route.get("/kData", async (req, res) => {
    try {
        return res.send({
            success: true,
            data: users
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message
        })
    }
})

module.exports = route;