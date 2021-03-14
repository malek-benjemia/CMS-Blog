const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    hHOST: "us-cdbr-east-03.cleardb.com",
    USER: "bb3d780745e9d6",
    PASSWORD: "8db37276",
    DB: "heroku_dc474aa494420c1",
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;

