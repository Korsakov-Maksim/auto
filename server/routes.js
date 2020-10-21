'use strict';

const orders = require('./ordersController')

module.exports = function (app) {
    app.route('/orders')
        .get(orders.get)

    app.route('/login')
        .post(orders.login)
};


