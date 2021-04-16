#!node
const { Sequelize, Model, DataTypes, Deferrable  } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:zxczxc@192.168.4.42:5432/weightdb');

const Order = sequelize.define('order', {
    useradmin_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'useradmin create'
    },
    customer_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'id customer'
    },
    in_out: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: 'flag 1 in 2 out'
    },
    weight: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00,
        comment: 'weight'
    },    
    product_id: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00,
        comment: 'weight'
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
    },    
    ticket: {
        type: DataTypes.STRING(8),
        allowNull: true,
        comment: 'ticket gen number in out'
    }
}, {
    sequelize,
    freezeTableName: true, //default name table [tableName: 'Employees']
    //tableName: 'Employees',
    timestamps: true,
    createdAt: true,
    updatedAt: 'updatedAt',
    comment: 'order table'
});

// `sequelize.define` also returns the model
console.log(Order === sequelize.models.Order); // true

async function Order_make() {
    await Order.sync({ force: true });
    console.log("####The table for the Order model was just (re)created!####");
    await console.log('====>CREATE SUCCESSFULLY....!<====');
}

Order_make()

//======================