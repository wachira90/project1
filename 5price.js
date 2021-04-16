#!node
const { Sequelize, Model, DataTypes, Deferrable } = require("sequelize");

// const sequelize = new Sequelize('postgres://postgres:zxczxc@192.168.6.150:5432/weightdb');

const sequelize = new Sequelize("weightdb", "postgres", "zxczxc", {
    host: "192.168.6.150",
    port: 5432,
    dialect: "postgres",
});

// const sequelize =  require('./connect-db');

const Last_price = sequelize.define(
    "last_price",
    {
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
    sequelize.close();
}

Last_price_make();
