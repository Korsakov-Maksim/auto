'use strict';


const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'auto'
})
connection.connect()

exports.get = function (request, response) {
    connection.query('select *\n' +
        'from заказ left join товар т on заказ.id_product = т.id_product\n' +
        'LEFT JOIN цены ц on т.id_product = ц.id_product;',
        function (error, results) {
        response.json(results)
    })
}