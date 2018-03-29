const mongoDBErrorHandler = (err, res, message) => {
  if (res) {
    res.json({
      code: -1,
      message: message || 'mongodb error',
      success: false
    })
  }
}

const mongoDBSuccessHandler = (res, message, data) => {
  if (res) {
    res.json({
      code: 0,
      message: message || 'mongodb success',
      success: true,
      data: data
    })
  }
}

module.exports = {
  errorHandler: mongoDBErrorHandler,
  successHandler: mongoDBSuccessHandler,
};


