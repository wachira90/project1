#!node
const { Sequelize, Model, DataTypes, Deferrable  } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:zxczxc@192.168.4.42:5432/weightdb')

const Customer_line = sequelize.define('customer_line', {
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
}

Customer_line_make()

//======================