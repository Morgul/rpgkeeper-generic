//----------------------------------------------------------------------------------------------------------------------
// Brief description for utils.js module.
//
// @module utils.js
//----------------------------------------------------------------------------------------------------------------------

var fs = require('fs');
var path = require('path');

//----------------------------------------------------------------------------------------------------------------------

// Basic request logging
function buildBasicRequestLogger(logger)
{
    return function(request, response, next)
    {
        logger.info("%s %s '%s'", request.method, response.statusCode, request.url);
        next();
    }; // end loggerFunc
} // end buildBasicRequestLogger

// Basic error logging
function buildBasicErrorLogger(logger)
{
    return function(error, request, response, next)
    {
        logger.error("%s '%s': Error encountered: \n%s", request.method, request.url, error.stack);
        next(error);
    }; // end loggerFunc
} // end buildBasicErrorLogger

//----------------------------------------------------------------------------------------------------------------------

module.exports = {
    requestLogger: buildBasicErrorLogger,
    errorLogger: buildBasicErrorLogger
}; // end exports

//----------------------------------------------------------------------------------------------------------------------