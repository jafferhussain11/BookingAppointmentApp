const Sequelize = require('sequelize');


const sequelize = new Sequelize('BookingApp', 'root', 'Maria123#', {

    dialect: 'mysql',
    host : 'localhost',

});

module.exports = sequelize;