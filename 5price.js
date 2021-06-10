#!node
const { Sequelize, Model, DataTypes, Deferrable } = require("sequelize");

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

const Last_price = sequelize.define("last_price", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        comment: 'auto id'
    },
    product_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: "product id"
    },
    product_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: "product name"
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.0,
        allowNull: false,
        comment: "product price"
    },
},
    {
        sequelize,
        freezeTableName: true,
        timestamps: true,
        createdAt: true,
        updatedAt: "updatedAt",
        comment: "last price table",
    }
);

console.log(Last_price === sequelize.models.Last_price);

async function Last_price_make() {
    await Last_price.sync({ force: true });
    console.log("####The table for the Last_price model was just (re)created!####");
    await console.log("====>CREATE SUCCESSFULLY....!<====");
    await Last_price.create({ product_id: 2, product_name: "มะนาว", price: "126.25" });
    await Last_price.create({ product_id: 2, product_name: "ปาล์ม", price: "99.02" });
    await Last_price.create({ product_id: 2, product_name: "มะพร้าว", price: "11.23" });
    sequelize.close();
}

Last_price_make();
