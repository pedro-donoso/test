const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "deve2024",
    host: "localhost",
    port: 5432,
    database: "perntodo" //\c perntodo en psql
});
module.exports = pool;