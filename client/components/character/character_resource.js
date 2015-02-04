// ---------------------------------------------------------------------------------------------------------------------
// CharacterResource
//
// @module character_resource
// ---------------------------------------------------------------------------------------------------------------------

function GenericCharacterResourceFactory($resource, _)
{
    var Character = $resource('/systems/generic/characters/:charID', {}, {
        save: {
            method: 'PUT',
            transformRequest: function(charData)
            {
                var char = {
                    stats: charData.stats,
                    rolls: charData.rolls,
                    counters: charData.counters,
                    quickNotes: charData.quickNotes,
                    notes: _.reduce(charData.notes, function(results, note)
                    {
                        results.push(_.omit(note, ['active']));
                        return results;
                    }, [])
                };

                return angular.toJson(char);
            }
        }
    });

    function CharacterResource(id)
    {
        this.id = id;

        this.refresh();
    } // end CharacterResource

    CharacterResource.prototype = {
        get baseChar(){ return this.$resource.baseChar; },
        get stats(){ return this.$resource.stats; },
        set stats(val){ this.$resource.stats = val; },
        get rolls(){ return this.$resource.rolls; },
        set rolls(val){ this.$resource.rolls = val; },
        get notes(){ return this.$resource.notes; },
        set notes(val){ this.$resource.notes = val; },
        get counters(){ return this.$resource.counters; },
        set counters(val){ this.$resource.counters = val; },
        get quickNotes(){ return this.$resource.quickNotes; },
        set quickNotes(val){ this.$resource.quickNotes = val; },

        get favCounters(){ return _.filter(this.$resource.counters, { favorite: true }); },
        get favStats(){ return _.filter(this.$resource.stats, { favorite: true }); },

        get resolved(){ return this.$resource.$resolved; },
        get promise(){ return this.$resource.$promise; }
    }; // end prototype

    CharacterResource.prototype.$loadResource = function()
    {
        var self = this;
        this.$resource = Character.get({ charID: this.id }, function()
            {
                self.error = undefined;
            }, function(response)
            {
                self.error = response;
            });
    }; // end $loadResource

    CharacterResource.prototype.refresh = function()
    {
        this.$loadResource();
    }; // end refresh

    CharacterResource.prototype.save = function()
    {
        return this.$resource.$save({ charID: this.id });
    }; // end save

    CharacterResource.prototype.delete = function()
    {
        return this.$resource.$delete({ charID: this.id });
    }; // end delete

    return function(id){ return new CharacterResource(id); };
} // end GenericCharacterResourceFactory

// ---------------------------------------------------------------------------------------------------------------------

angular.module('rpgkeeper').factory('GenericCharacterResource', [
    '$resource',
    'lodash',
    GenericCharacterResourceFactory
]);

// ---------------------------------------------------------------------------------------------------------------------