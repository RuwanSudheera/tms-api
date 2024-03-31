const loggerMiddleware = (req, res, next) => {
    console.log(req.method, 'Request received | from :',req.url, '| at:', new Date());
    next();
  };
  
  module.exports = loggerMiddleware;