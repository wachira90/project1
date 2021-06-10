#!node
const { Sequelize, Model, DataTypes, Deferrable  } = require('sequelize');

const config = require('config');
let _HOST = config.get('_HOST');
let _USER = config.get('_USER');
let _DB = config.get('_DB');
let _DBTYPE = config.get('_DBTYPE');
let _PASS = config.get('_PASS');
let _PORT = config.get('_PORT');

const sequelize = new Sequelize(_DB, _USER, _PASS, {
    host: _HOST,
    port: _PORT,
    dialect: _DBTYPE
});

const Customer_line = sequelize.define('customer_line', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique : true,
        primaryKey: true,
        comment: 'auto id'
    },
    customer_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'id customer'
    },
    line_token: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'line token customer'
    }
}, {
    sequelize,
    freezeTableName: true, 
    timestamps: true,
    createdAt: true,
    updatedAt: 'updatedAt',
    comment: 'line customer table'
});

console.log(Customer_line === sequelize.models.Customer_line);

async function Customer_line_make() {
    await Customer_line.sync({ force: true });
    console.log("####The table for the Customer_line model was just (re)created!####");
    await console.log('====>CREATE SUCCESSFULLY....!<====');
    await Customer_line.create({ customer_id: 3, line_token: "sdf" });
    await Customer_line.create({ customer_id: 2, line_token: "xcv" });
    await Customer_line.create({ customer_id: 1, line_token: "ghj" });
    sequelize.close();
}

Customer_line_make();