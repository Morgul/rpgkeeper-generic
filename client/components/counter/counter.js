// ---------------------------------------------------------------------------------------------------------------------
// GenericCounter
//
// @module counter.js
// ---------------------------------------------------------------------------------------------------------------------

function GenericCounterFactory()
{
    function GenericCounterController($scope)
    {
        $scope.change = _.isFunction($scope.change($scope)) ? $scope.change($scope) : function(){};

        $scope.add = function()
        {
            $scope.counter.value += $scope.modifier !== undefined ? $scope.modifier : 1;
            $scope.modifier = undefined;
            $scope.change();
        }; // end add

        $scope.sub = function()
        {
            $scope.counter.value -= $scope.modifier !== undefined ? $scope.modifier : 1;
            $scope.modifier = undefined;
            $scope.change();
        }; // end sub

        $scope.set = function()
        {
            if($scope.modifier !== undefined)
            {
                $scope.counter.value = angular.copy($scope.modifier);
                $scope.modifier = undefined;
                $scope.change();
            } // end if
        }; // end set
    } // end GenericCounterController

    return {
        restrict: 'E',
        scope: {
            counter: '=',
            change: '&'
        },
        templateUrl: "/systems/generic/components/counter/counter.html",
        controller: ['$scope', GenericCounterController],
        replace: true
    };
} // end GenericCounterFactory

// ---------------------------------------------------------------------------------------------------------------------

angular.module('generic.components').directive('genericCounter', [GenericCounterFactory]);

// ---------------------------------------------------------------------------------------------------------------------