//----------------------------------------------------------------------------------------------------------------------
// Models for RPGKeeper
//
// @module models.js
//----------------------------------------------------------------------------------------------------------------------

var path = require('path');

var jbase = require('jbase');

//----------------------------------------------------------------------------------------------------------------------

var db = { errors: jbase.errors };
var rootPath = path.join(__dirname, 'db');

//----------------------------------------------------------------------------------------------------------------------
// Character Model
//----------------------------------------------------------------------------------------------------------------------

db.Character = jbase.defineModel('generic_characters', {
    baseChar: { type: String, required: true },
    stats: { type: Array, default: [] },
    rolls: { type: Array, default: [] },
    notes: { type: Array, default: [] }
}, { rootPath: rootPath, pk: 'baseChar' });

//----------------------------------------------------------------------------------------------------------------------

module.exports = db;

//----------------------------------------------------------------------------------------------------------------------