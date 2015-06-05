// ---------------------------------------------------------------------------------------------------------------------
// GenericRollsDirective
//
// @module rolls.js
// ---------------------------------------------------------------------------------------------------------------------

function GenericRollsDirectiveFactory(diceSvc)
{
    function GenericRollsDirectiveController($scope)
    {
        Object.defineProperties($scope, {
            value: {
                get: function(){ return ($scope.results || {}).value; }
            }
        });

        $scope.roll = function()
        {
            $scope.results = diceSvc.roll($scope.expression, $scope.context);
        }; // end roll

        $scope.clear = function()
        {
            $scope.results = undefined;
        }; // end clear
    } // end GenericRollsDirectiveController

    return {
        restrict: 'E',
        scope: {
            expression: '=',
            name: '=',
            context: '='
        },
        replace: true,
        templateUrl: "/systems/generic/components/rolls/rolls.html",
        controller: ['$scope', GenericRollsDirectiveController]
    };
} // end GenericRollsDirectiveFactory

// ---------------------------------------------------------------------------------------------------------------------

angular.module('generic.components').directive('genericRoll', [
    'DiceService',
    GenericRollsDirectiveFactory
]);

// ---------------------------------------------------------------------------------------------------------------------