const Pool = require("pg").Pool;

const pool = new Pool({
    host     : 'dev-database.cfa8nnooilud.us-east-2.rds.amazonaws.com',
    user     : 'postgres',
    password : 'Kbt2dDjlynYb1zvMHT2C',
    port     : '5432',
    database : "pfi-analyzer"
});

module.exports = pool;