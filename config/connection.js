const Sequelize = require('sequelize');

require('dotenv').config();


  const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'us-cdbr-east-03.cleardb.com',
      dialect: 'mysql'
    });

  

module.exports = sequelize;


