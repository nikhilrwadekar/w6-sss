// Import query from promise-mysql.js
const { query } = require("./promise-mysql.js");

// Import cp from connection.js
const { cp } = require("./connection.js");

// Using our DB promise
query(cp, 'DROP TABLE IF EXISTS dogs;')
    .then(() => { console.log('Dogs table dropped!') })
    .catch(error => { console.log(error); });
