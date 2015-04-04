//----------------------------------------------------------------------------------------------------------------------
// Models for RPGKeeper
//
// @module models.js
//----------------------------------------------------------------------------------------------------------------------

var path = require('path');

var trivialdb = require('trivialdb');

//----------------------------------------------------------------------------------------------------------------------

var db = { errors: trivialdb.errors };
var rootPath = path.join(__dirname, 'db');

//----------------------------------------------------------------------------------------------------------------------
// Character Model
//----------------------------------------------------------------------------------------------------------------------

db.Character = trivialdb.defineModel('generic_characters', {
    baseChar: { type: String, required: true },
    counters: { type: Array, default: [] },
    stats: { type: Array, default: [] },
    rolls: { type: Array, default: [] },
    notes: { type: Array, default: [] },
    quickNotes: String
}, { rootPath: rootPath, pk: 'baseChar' });

//----------------------------------------------------------------------------------------------------------------------

module.exports = db;

//----------------------------------------------------------------------------------------------------------------------