// ---------------------------------------------------------------------------------------------------------------------
// CharacterController
//
// @module character.js
// ---------------------------------------------------------------------------------------------------------------------

function GenericCharacterController($scope, charSvc, baseSvc)
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
} // end CharacterController

// ---------------------------------------------------------------------------------------------------------------------

angular.module('rpgkeeper').controller('GenericCharController', [
    '$scope',
    'GenericCharacterService',
    'BaseCharacterService',
    GenericCharacterController
]);

// ---------------------------------------------------------------------------------------------------------------------