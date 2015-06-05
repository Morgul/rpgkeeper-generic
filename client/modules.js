// ---------------------------------------------------------------------------------------------------------------------
// Generic System Modules
//
// @module modules.js
// ---------------------------------------------------------------------------------------------------------------------

angular.module('generic.components', ['rpgkeeper.systems']);
angular.module('generic.controllers', ['generic.components']);
angular.module('generic', ['generic.components', 'generic.controllers']);

// ---------------------------------------------------------------------------------------------------------------------
