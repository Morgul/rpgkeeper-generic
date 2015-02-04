//----------------------------------------------------------------------------------------------------------------------
// This is the main system module for the Generic System.
//
// @module system.js
//----------------------------------------------------------------------------------------------------------------------

var path = require('path');
var express = require('express');

var routeUtils = require('./server/routes/utils');
var charRoute = require('./server/routes/characters');

var logger = require('omega-logger').loggerFor(module);

//----------------------------------------------------------------------------------------------------------------------

var router = express.Router();

//----------------------------------------------------------------------------------------------------------------------
// System Router Setup
//----------------------------------------------------------------------------------------------------------------------

// Basic request logging
router.use(routeUtils.requestLogger(logger));

// Basic error logging
router.use(routeUtils.errorLogger(logger));

// Setup static serving
router.use(express.static(path.resolve(__dirname + '/client')));

// Sub routes
router.use('/characters', charRoute);

//----------------------------------------------------------------------------------------------------------------------

module.exports = {
    name: "Generic System",
    id: "generic",
    description: "A generic system designed to be usable with any pen and paper RPG.",
    router: router,
    scripts: [
        '/systems/generic/components/character/character.js',
        '/systems/generic/components/character/character_resource.js',
        '/systems/generic/components/character/character_service.js',
        '/systems/generic/components/notes/notes.js',
        '/systems/generic/components/notes/notes_service.js',
        '/systems/generic/components/counter/counter.js'
    ]
}; // end exports

//----------------------------------------------------------------------------------------------------------------------