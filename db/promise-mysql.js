// promise-mysql.js

// Creating promise based MySQL driver here..

const query = (connectionPool, sqlQuery) => {
    // It's going to obviously return a promise..

    return new Promise((resolve, reject) => {
        connectionPool.query(sqlQuery, (error, result) => {
            if (error) {
                // If any error occurs, reject Promise.
                reject(error);
            }
            else {
                // Else resolve it with a result.
                resolve(result);
            }
        });
    });
}

exports.query = query;
