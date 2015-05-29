// ---------------------------------------------------------------------------------------------------------------------
// GenericDetailsController
//
// @module stats.js
// ---------------------------------------------------------------------------------------------------------------------

function GenericDetailsController($scope)
{

    $scope.$watch('editMode', function()
    {
        if($scope.editMode)
        {
            $scope.template = 'detailsEdit.html';
        }
        else
        {
            $scope.template = 'detailsDisplay.html';
        } // end if
    });

    // -----------------------------------------------------------------------------------------------------------------
    // Stats
    // -----------------------------------------------------------------------------------------------------------------

    $scope.addStat = function()
    {
        $scope.char.stats.push({});
    }; // end addStat

    $scope.removeStat = function(index)
    {
        $scope.char.stats.splice(index, 1);
        $scope.char.save();
    }; // end removeStat

    // -----------------------------------------------------------------------------------------------------------------
    // Rolls
    // -----------------------------------------------------------------------------------------------------------------

    $scope.addRoll = function()
    {
        $scope.char.rolls.push({});
    }; // end addRoll

    $scope.removeRoll = function(index)
    {
        $scope.char.rolls.splice(index, 1);
        $scope.char.save();
    }; // end removeRoll

    // -----------------------------------------------------------------------------------------------------------------
    // Counters
    // -----------------------------------------------------------------------------------------------------------------

    $scope.addCounter = function()
    {
        $scope.char.counters.push({});
    }; // end addCounter

    $scope.removeCounter = function(index)
    {
        $scope.char.counters.splice(index, 1);
        $scope.char.save();
    }; // end removeCounter

    // -----------------------------------------------------------------------------------------------------------------
} // end GenericDetailsController

// ---------------------------------------------------------------------------------------------------------------------

angular.module('rpgkeeper.controllers').controller('GenericDetailsController', [
    '$scope',
    GenericDetailsController
]);

// ---------------------------------------------------------------------------------------------------------------------