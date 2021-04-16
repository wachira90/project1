#!node
const { Sequelize, DataTypes } = require('sequelize');

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize = new Sequelize('postgres://postgres:zxczxc@192.168.4.42:5432/weightdb') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

const User = sequelize.define('euser', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    uid: {
        type: DataTypes.UUID,
        allowNull: true
    },
    bdate: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    // Other model options go here
    timestamps: true,

    createdAt: true,

    // I want updatedAt to actually be called updateTimestamp
    // updatedAt: 'updateTimestamp'
    updatedAt: 'updatedAt'
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

async function user_make() {
    await User.sync({ force: true });
    console.log("####The table for the User model was just (re)created!####");
    await console.log('====>CREATE SUCCESSFULLY....!<====');
}

user_make()

//======================