#!node
const { Sequelize, Model, DataTypes, Deferrable  } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:zxczxc@192.168.4.42:5432/weightdb');

const Pic = sequelize.define('pic', {
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
}

Pic_make()

//======================