// ---------------------------------------------------------------------------------------------------------------------
// GenericStatsController
//
// @module stats.js
// ---------------------------------------------------------------------------------------------------------------------

function GenericStatsController($scope)
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
} // end GenericStatsController

// ---------------------------------------------------------------------------------------------------------------------

angular.module('rpgkeeper.controllers').controller('GenericStatsController', [
    '$scope',
    GenericStatsController
]);

// ---------------------------------------------------------------------------------------------------------------------