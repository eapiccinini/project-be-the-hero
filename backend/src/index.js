const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/** 
 * Rota/Recurse
 */
 
 /**
  * Métodos HTTP:
  * GET: Buscar uma informação no back=end
  * POST: Criar uma informação no back=end
  * PUT: Alterar uma informação no back=end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetro
   * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: Select * From users
     * Query Builder: table('users').select('*').where;
     * 
     */


app.listen(3333);
