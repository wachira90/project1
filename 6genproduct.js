#!node
const { Sequelize, Model, DataTypes, Deferrable } = require('sequelize');

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

const Prod_type = sequelize.define('prod_type', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique : true,
        primaryKey: true,
        comment: 'auto id'
    },
    product_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'product name'
    }
}, {
    sequelize,
    freezeTableName: true,
    timestamps: true,
    createdAt: true,
    updatedAt: 'updatedAt',
    comment: 'product table'
});

console.log(Prod_type === sequelize.models.Prod_type);

async function Prod_type_make() {
    await Prod_type.sync({ force: true });
    console.log("####The table for the Prod_type model was just (re)created!####");
    await console.log('====>CREATE SUCCESSFULLY....!<====');
    await Prod_type.create({product_name:"มะนาว"});
    await Prod_type.create({product_name:"ปาล์ม"});
    await Prod_type.create({product_name:"มะพร้าว"});
    sequelize.close();
}

Prod_type_make();