'use strict';


const mysql = require('mysql2')

let connection

exports.get = function (request, response) {
    connection ? connection.query('select *\n' +
        'from заказ left join товар т on заказ.id_product = т.id_product\n' +
        'LEFT JOIN цены ц on т.id_product = ц.id_product;',
        function (error, results) {
        response.json(results)
    }) : response.json({success: false})
}

exports.login = function (request, response) {
    connection = mysql.createConnection({
        host: 'localhost',
        user: request.body.name,
        password: request.body.password,
        database: 'auto'
    })
    connection.connect()
    connection.query('SELECT NOW()', function (error, results) {
        console.log(results)
        response.json({success: !!results})
    })
}