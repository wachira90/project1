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

const Pic = sequelize.define('pic', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        comment: 'auto id'
    },
    order_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'order id'
    },
    pic_front: {
        type: DataTypes.BLOB,
        allowNull: false,
        comment: 'pic front'
    },
    pic_rear: {
        type: DataTypes.BLOB,
        allowNull: false,
        comment: 'pic rear'
    }
}, {
    sequelize,
    freezeTableName: true, //default name table [tableName: 'Employees']
    //tableName: 'Employees',
    timestamps: true,
    createdAt: true,
    updatedAt: 'updatedAt',
    comment: 'pic table'
});

// `sequelize.define` also returns the model
console.log(Pic === sequelize.models.Pic); // true

async function Pic_make() {
    await Pic.sync({ force: true });
    console.log("####The table for the Pic model was just (re)created!####");
    await console.log('====>CREATE SUCCESSFULLY....!<====');
    await Pic.create({ order_id: 2, pic_front: "ffffffffff", pic_rear: "ffffffffff" });
    await Pic.create({ order_id: 3, pic_front: "ddddddddd", pic_rear: "ddddddddd" });
    await Pic.create({ order_id: 1, pic_front: "kkkkkkkkk", pic_rear: "kkkkkkkkk" });
    sequelize.close();
}

Pic_make();