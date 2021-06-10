#!node
const { Sequelize, Model, DataTypes, Deferrable, Op } = require('sequelize');

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
    dialect: _DBTYPE,
});

const Useradmin = sequelize.define('useradmin', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique : true,
        primaryKey: true,
        comment: 'auto id'
    },
    first_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'useradmin name'
    },
    last_name: {
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
    console.log("====>The table for the User model was just (re)created!<====");
    await console.log('====>CREATE SUCCESSFULLY....!<====');
    await Useradmin.create({ first_name: "Jane", last_name: "Doe", login_name: "ttyy", login_pass: "ht54", tel: "0852215477", role: 1 });
    await Useradmin.create({ first_name: "Sam", last_name: "Mohug", login_name: "kknd", login_pass: "qw34", tel: "0852210000", role: 2 });
    await Useradmin.create({ first_name: "Kill", last_name: "Kick", login_name: "susan", login_pass: "f3h6", tel: "0852211111", role: 3 });
    await Useradmin.create({ first_name: "King", last_name: "Jump", login_name: "wach", login_pass: "dfgtr", tel: "0852211121", role: 3 });
    sequelize.close();
}

async function Getuseradmin() {
    const Useradmins = await Useradmin.findAll();
    // const Useradmins = await Useradmin.findAll({
    //     where: { id: 2 }
    // });
    sequelize.close();
    console.log("All users:", JSON.stringify(Useradmins, null, 2));
}

// Getuseradmin();
Useradmin_make();


// async function Updateuseradmin() {
// await Useradmins.update({ lastName: "Doe" }, {
//     where: {
//       lastName: null
//     }
//   });
//   sequelize.close();
//   console.log("update success");
// }


// async function Deleteuseradmin() {
// await Useradmins.destroy({
//     where: {
//       firstName: "Jane"
//     }
//   });
//   sequelize.close();
// }


// Truncate the table
//await Useradmins.destroy({truncate: true});