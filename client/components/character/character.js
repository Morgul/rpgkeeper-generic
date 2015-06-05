// ---------------------------------------------------------------------------------------------------------------------
// CharacterController
//
// @module character.js
// ---------------------------------------------------------------------------------------------------------------------

function GenericCharacterController($scope, _, charSvc, baseSvc)
{
    $scope.nav = 'summary';
    $scope.notfound = false;

    charSvc.current.promise
        .then(function()
        {
            $scope.char = charSvc.current;
            $scope.base = baseSvc.current;
        })
        .catch(function(error)
        {
            if(error.status == 404)
            {
                $scope.notfound = true;
            } // end if
        });

    $scope.saveChar = _.debounce(function()
    {
        $scope.char.save();
    }, 1000); // end if
} // end CharacterController

// ---------------------------------------------------------------------------------------------------------------------

angular.module('generic.components').controller('GenericCharController', [
    '$scope',
    'lodash',
    'GenericCharacterService',
    'BaseCharacterService',
    GenericCharacterController
]);

// ---------------------------------------------------------------------------------------------------------------------