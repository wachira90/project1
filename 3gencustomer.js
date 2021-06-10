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

const Customer = sequelize.define('customer', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique : true,
        primaryKey: true,
        comment: 'auto id'
    },
    first_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'name customer'
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'name customer'
    },
    login_name: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: 'login customer'
    },
    login_pass: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: 'login customer'
    },
    line: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: 'line id customer'
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: 'email customer'
    },
    tel: {
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: 'tel customer'
    },
    addby: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: 'adminuser add by'
    },
    updateby: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: 'adminuser update by'
    }
}, {
    sequelize,
    freezeTableName: true, 
    timestamps: true,
    createdAt: true,
    updatedAt: 'updatedAt',
    comment: 'customer table'
});

console.log(Customer === sequelize.models.Customer);

async function Customer_make() {
    await Customer.sync({ force: true });
    console.log("####The table for the Customer model was just (re)created!####");
    await console.log('====>CREATE SUCCESSFULLY....!<====');
    await Customer.create({ first_name: "Tomas", last_name: "Andison",login_name:"green", login_pass:"pwdgreen",line:2,email:"em@vm.com",tel:"0824454586",addby:2,updateby:3});
    await Customer.create({ first_name: "Samm", last_name: "Flinn",login_name:"yellow", login_pass:"pwdred",line:2,email:"em@eccc.com",tel:"0824450000",addby:1,updateby:2});
    await Customer.create({ first_name: "Kings", last_name: "Man",login_name:"red", login_pass:"erty",line:2,email:"em@mmmm.com",tel:"0824451111",addby:1,updateby:1});
    sequelize.close();
}

Customer_make();