const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: '192.168.4.42',
    database: 'weightdb',
    password: 'zxczxc',
    port:  5432 ,
})
pool.query('SELECT * FROM eusers LIMIT 50', (err, res) => {
    // console.log(err, res.rows)
    console.log({'res':res.rows})
    pool.end()
})