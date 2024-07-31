const { Sequelize } = require('sequelize');
const config = require('../config/config');
new Sequelize(config.databaseUrl, {
    dialect: 'postgres',
});

import Sequelize from 'sequelize';

const db = {};
db.Sequelize = Sequelize;
db.sequelize = Sequelize;

//Import models
db.User = require('./user')(sequelize, Sequelize);
db.Account = require('./account')(sequelize, Sequelize);
db.Transaction = require('./transaction')(Sequelize, Sequelize);



//Associatons
db.User.hasOne(db.Account);
db.Account.belongsTo(db.User);
db.Account.hasMany(db.Transaction, { as: 'sentTransactions', foreignKey: 'senderId' });
db.Account.hasMany(db.Transaction, { as: 'recievedTransactions', foreignKey: 'receiverId' });

module.exports = db;