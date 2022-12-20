const Sequelize = require('sequelize');


const sequelize = new Sequelize(DBADMINPASS', {

    dialect: 'mysql',
    host : 'localhost',

});

module.exports = sequelize;
