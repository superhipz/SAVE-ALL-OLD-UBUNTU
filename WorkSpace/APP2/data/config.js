const mysql = require ('mysql')
var config = {
    host: "localhost",
    user: "root",
    password: "phong2305",
    database: "api"
}

const pool = mysql.createPool(config)
module.exports = pool