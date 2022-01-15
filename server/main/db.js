const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'itinerary_project',
    password: '123456',
    post: 5432
});

module.exports = pool