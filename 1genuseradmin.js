#!node
const { Sequelize, Model, DataTypes, Deferrable  } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:zxczxc@192.168.4.42:5432/weightdb')

const Useradmin = sequelize.define('useradmin', {
    first_ame: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'useradmin name'
    },
    last_ame: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'useradmin name'
    },
    login_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'useradmin login'
    },
    login_pass: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'useradmin login'
    },
    tel: {
        type: DataTypes.STRING(10),
        allowNull: false,
        comment: 'tel'
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: 'role permission'
    }
    // bdate: {
    //     type: DataTypes.DATEONLY,
    //     allowNull: false
    // }
}, {
    sequelize,
    freezeTableName: true, 
    timestamps: true,
    createdAt: true,
    updatedAt: 'updatedAt',
    comment: 'useradmin table'
});

// console.log(User === sequelize.models.User);

async function Useradmin_make() {
    await Useradmin.sync({ force: true });
    console.log("####The table for the User model was just (re)created!####");
    await console.log('====>CREATE SUCCESSFULLY....!<====');
}

Useradmin_make()

//======================