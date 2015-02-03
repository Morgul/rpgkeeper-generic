// ---------------------------------------------------------------------------------------------------------------------
// A notes service
//
// @module notes.service.js
// ---------------------------------------------------------------------------------------------------------------------

function NoteServiceFactory(charSvc)
{
    function NoteService()
    {
        Object.defineProperty(this, 'notes', {
            get: function(){ return charSvc.current.notes; }
        });
    } // end NoteService

    NoteService.prototype.add = function(note)
    {
        this.notes.push(note);
        return charSvc.current.save();
    }; // end add

    NoteService.prototype.delete = function(index)
    {
        this.notes.splice(index, 1);
        return charSvc.current.save();
    }; // end delete

    return new NoteService();
} // end NoteServiceFactory

// ---------------------------------------------------------------------------------------------------------------------

angular.module('rpgkeeper').service('GenericNotesService', [
    'GenericCharacterService',
    NoteServiceFactory
]);

// ---------------------------------------------------------------------------------------------------------------------