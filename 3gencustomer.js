#!node
const { Sequelize, Model, DataTypes, Deferrable  } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:zxczxc@192.168.4.42:5432/weightdb')

const Customer = sequelize.define('customer', {
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
}

Customer_make()

//======================