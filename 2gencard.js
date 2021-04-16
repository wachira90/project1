#!node
const { Sequelize, Model, DataTypes, Deferrable  } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:zxczxc@192.168.4.42:5432/weightdb');


const Card = sequelize.define('card', {
    // idm: { type: DataTypes.STRING, primaryKey: true },
    customer_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'customer id'
    },
    useradmin_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'admin id'
    },
    card_id: {
//         type: DataTypes.UUID,
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'card id'
    }
}, {
    sequelize,
    freezeTableName: true, 
    timestamps: true,
    createdAt: true,
    updatedAt: 'updatedAt',
    comment: 'card table'
});

// console.log(Card === sequelize.models.Card); 

async function Card_make() {
    await Card.sync({ force: true });
    console.log("####The table for the Card model was just (re)created!####");
    await console.log('====>CREATE SUCCESSFULLY....!<====');
}

Card_make()
