var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',      
        user : 'root',     
        password : '',  
        database : 'db_api_node'
     }
});
module.exports = knex