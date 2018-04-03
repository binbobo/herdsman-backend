const responseHeaders = (req, res, next) => {
  // CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
}

const whiteList = ['/api/users/login', '/api/users/register']
const checkAuthorized = (req, res, next) => {
  if (!whiteList.includes(req.url) && (!req.session.user)) {
    res.json({
      code: 401,
      message: 'unauthorized',
      success: false
    })
  } else {
    if (req.url === '/api/users/logout') {
      req.session.user = null
    }
    next()
  }
}

module.exports = {
  responseHeaders: responseHeaders,
  checkAuthorized: checkAuthorized,
};


