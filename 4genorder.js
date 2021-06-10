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

const Order = sequelize.define('order', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        comment: 'auto id'
    },
    useradmin_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'useradmin create'
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'id customer'
    },
    in_out: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: 'Flag 1 IN 2 OUT'
    },
    on_delete: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: 'Flag 0 USE 1 DELETE'
    },
    weight: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00,
        comment: 'weight'
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00,
        comment: 'price'
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'product_id'
    },
    useradmin_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'adminuser add by'
    },
    card: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: 'card rfid'
    },
    updateby: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'adminuser update by'
    },
    ticket: {
        type: DataTypes.STRING(16),
        allowNull: false,
        unique: true,
        defaultValue: Date.now(),
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
    // user             customer      IN          weight  
    await Order.create({
        useradmin_id: 3, customer_id: 2, in_out: 1, on_delete: 0, weight: "1223.35", price: 11.13, product_id: 3, useradmin_id: 2, card: Date.now(), updateby: 2, ticket: Date.now()
    });

    await Order.create({
        useradmin_id: 2, customer_id: 1, in_out: 2, on_delete: 0, weight: "95.44", price: 12.13, product_id: 2, useradmin_id: 1, card: Date.now(), updateby: 1, ticket: Date.now()
    });

    await Order.create({
        useradmin_id: 1, customer_id: 1, in_out: 1, on_delete: 0, weight: "689.00", price: 13.13, product_id: 3, useradmin_id: 2, card: Date.now(), updateby: 2, ticket: Date.now()
    });
    await Order.create({
        useradmin_id: 3, customer_id: 2, in_out: 1, on_delete: 0, weight: "1223.35", price: 14.13, product_id: 3, useradmin_id: 2, card: Date.now(), updateby: 2, ticket: Date.now()
    });

    await Order.create({
        useradmin_id: 2, customer_id: 1, in_out: 2, on_delete: 0, weight: "95.44", price: 15.13, product_id: 2, useradmin_id: 1, card: Date.now(), updateby: 1, ticket: Date.now()
    });

    await Order.create({
        useradmin_id: 1, customer_id: 1, in_out: 1, on_delete: 0, weight: "689.00", price: 16.13, product_id: 3, useradmin_id: 2, card: Date.now(), updateby: 2, ticket: Date.now()
    });
    await Order.create({
        useradmin_id: 3, customer_id: 2, in_out: 1, on_delete: 0, weight: "1223.35", price: 17.13, product_id: 3, useradmin_id: 2, card: Date.now(), updateby: 2, ticket: Date.now()
    });

    await Order.create({
        useradmin_id: 2, customer_id: 1, in_out: 2, on_delete: 0, weight: "95.44", price: 18.13, product_id: 2, useradmin_id: 1, card: Date.now(), updateby: 1, ticket: Date.now()
    });

    await Order.create({
        useradmin_id: 1, customer_id: 1, in_out: 1, on_delete: 0, weight: "689.00", price: 19.13, product_id: 3, useradmin_id: 2, card: Date.now(), updateby: 2, ticket: Date.now()
    });
    await Order.create({
        useradmin_id: 3, customer_id: 2, in_out: 1, on_delete: 0, weight: "1223.35", price: 110.13, product_id: 3, useradmin_id: 2, card: Date.now(), updateby: 2, ticket: Date.now()
    });

    await Order.create({
        useradmin_id: 2, customer_id: 1, in_out: 2, on_delete: 0, weight: "95.44", price: 111.13, product_id: 2, useradmin_id: 1, card: Date.now(), updateby: 1, ticket: Date.now()
    });

    await Order.create({
        useradmin_id: 1, customer_id: 1, in_out: 1, on_delete: 0, weight: "689.00", price: 112.13, product_id: 3, useradmin_id: 2, card: Date.now(), updateby: 2, ticket: Date.now()
    });
    await Order.create({
        useradmin_id: 3, customer_id: 2, in_out: 1, on_delete: 0, weight: "1223.35", price: 113.13, product_id: 3, useradmin_id: 2, card: Date.now(), updateby: 2, ticket: Date.now()
    });

    await Order.create({
        useradmin_id: 2, customer_id: 1, in_out: 2, on_delete: 0, weight: "95.44", price: 114.13, product_id: 2, useradmin_id: 1, card: Date.now(), updateby: 1, ticket: Date.now()
    });

    await Order.create({
        useradmin_id: 1, customer_id: 1, in_out: 1, on_delete: 0, weight: "689.00", price: 115.13, product_id: 3, useradmin_id: 2, card: Date.now(), updateby: 2, ticket: Date.now()
    });
    await Order.create({
        useradmin_id: 3, customer_id: 2, in_out: 1, on_delete: 0, weight: "1223.35", price: 116.13, product_id: 3, useradmin_id: 2, card: Date.now(), updateby: 2, ticket: Date.now()
    });

    await Order.create({
        useradmin_id: 2, customer_id: 1, in_out: 2, on_delete: 0, weight: "95.44", price: 117.13, product_id: 2, useradmin_id: 1, card: Date.now(), updateby: 1, ticket: Date.now()
    });

    await Order.create({
        useradmin_id: 1, customer_id: 1, in_out: 1, on_delete: 0, weight: "689.00", price: 118.13, product_id: 3, useradmin_id: 2, card: Date.now(), updateby: 1, ticket: Date.now()
    });
    sequelize.close();
}

Order_make();