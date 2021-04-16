#!node
const { Sequelize, Model, DataTypes, Deferrable  } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:zxczxc@192.168.4.42:5432/weightdb');

const Prod_type = sequelize.define('prod_type', {
    product_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'product name'
    }
    // line_token: {
    //     type: DataTypes.STRING(50),
    //     allowNull: false,
    //     comment: 'line token customer'
    // }
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
}

Prod_type_make()

//======================