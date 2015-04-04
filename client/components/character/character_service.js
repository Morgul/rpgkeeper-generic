// ---------------------------------------------------------------------------------------------------------------------
// BaseCharacterService
//
// @module character_service.js
// ---------------------------------------------------------------------------------------------------------------------

function GenericCharacterServiceFactory($cacheFactory, $routeParams, CharResource)
{
    function GenericCharacterService()
    {
        this.characterCache = $cacheFactory('genCharCache', { capacity: 10 });

        Object.defineProperties(this, {
            current: {
                get: function()
                {
                    if($routeParams.charID)
                    {
                        return this.get($routeParams.charID);
                    } // end if
                }
            }
        });
    } // end GenericCharacterService

    GenericCharacterService.prototype.get = function(charID, skipRefresh)
    {
        var char = this.characterCache.get(charID);

        if(!char)
        {
            char = CharResource(charID);
            this.characterCache.put(char);
        }
        else if(!skipRefresh)
        {
            // Get the latest version of the character
            char.refresh();
        } // end if

        return char
    }; // end get

    return new GenericCharacterService();
} // end GenericCharacterServiceFactory

// ---------------------------------------------------------------------------------------------------------------------

angular.module('rpgkeeper.services').service('GenericCharacterService', [
    '$cacheFactory',
    '$routeParams',
    'GenericCharacterResource',
    GenericCharacterServiceFactory
]);

// ---------------------------------------------------------------------------------------------------------------------