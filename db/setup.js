// Import query from promise-mysql.js
const { query } = require("./promise-mysql.js");

// Import cp from connection.js
const { cp } = require("./connection.js");

// Using our DB promise
query(cp, 'DROP TABLE IF EXISTS dogs; CREATE TABLE dogs(name varchar(255));')
    .then(result => query(cp, "INSERT INTO dogs(name) VALUES ('Scuffles');"))
    .then(result => query(cp, "SELECT * FROM dogs;"))
    .then(result => console.log(result))
    .then(() => { process.exit(); })
    .catch(error => console.log(error))
