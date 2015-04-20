// ---------------------------------------------------------------------------------------------------------------------
// GenericDetailsController
//
// @module stats.js
// ---------------------------------------------------------------------------------------------------------------------

function GenericDetailsController($scope)
{
    $scope.addStat = function()
    {
        $scope.char.stats.push({});
    }; // end addStat

    $scope.removeStat = function(index)
    {
        $scope.char.stats.splice(index, 1);
        $scope.char.save();
    }; // end removeStat
} // end GenericDetailsController

// ---------------------------------------------------------------------------------------------------------------------

angular.module('rpgkeeper.controllers').controller('GenericDetailsController', [
    '$scope',
    GenericDetailsController
]);

// ---------------------------------------------------------------------------------------------------------------------