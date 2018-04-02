const DBCommonHander = require('../utils/db')

const heart = function (req, res) {
  DBCommonHander.successHandler( res, 'heart message', req.session.user)
};

module.exports = { heart }