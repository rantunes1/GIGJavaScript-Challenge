angular.module('gig')
    .factory('ContactService', [function () {
        var getContacts = function () {
          return contactList;
        }

        var getContact = function (contactId) {
            return contactList.filter(function (contact) {
                return contact.id === contactId;
            })[0];
        };

        var saveContact = function (contact) {
            if (contact.id) {
                var updatedContact = angular.extend({}, getContact(contact.id), contact);
                removeContact(contact.id);
            } else {
                var lastId = Math.max(...contactList.map(function (contact) { return parseInt(contact.id, 10) }));
                contact.id = String(lastId++);
            }
            contactList.push(contact);
        };

        var removeContact = function (contactId) {
            console.log('removing contact', contactId);
            var index = contactList.map(function (contact) { return contact.id }).indexOf(contactId);
            contactList.splice(index, 1);
        };   

        // contact list sample data from https://www.json-generator.com
        var contactList = [
            {'id': '1', 'firstname': 'Tara', 'lastname': 'Glenn', 'email': 'taraglenn@joviold.com', 'country': 'ES'},
            {'id': '2', 'firstname': 'Michele', 'lastname': 'Solis', 'email': 'michelesolis@joviold.com', 'country': 'GB'},
            {'id': '3', 'firstname': 'Winnie', 'lastname': 'Fisher', 'email': 'winniefisher@joviold.com', 'country': 'GB'},
            {'id': '4', 'firstname': 'Sykes', 'lastname': 'Combs', 'email': 'sykescombs@joviold.com', 'country': 'ES'},
            {'id': '5', 'firstname': 'Nell', 'lastname': 'Simmons', 'email': 'nellsimmons@joviold.com', 'country': 'ES'},
            {'id': '6', 'firstname': 'Hicks', 'lastname': 'Jacobs', 'email': 'hicksjacobs@joviold.com', 'country': 'ES'},
            {'id': '7', 'firstname': 'Yang', 'lastname': 'Hardin', 'email': 'yanghardin@joviold.com', 'country': 'GB'},
            {'id': '8', 'firstname': 'Berg', 'lastname': 'Ratliff', 'email': 'bergratliff@joviold.com', 'country': 'ES'},
            {'id': '9', 'firstname': 'Erica', 'lastname': 'Snider', 'email': 'ericasnider@joviold.com', 'country': 'GB'},
            {'id': '10', 'firstname': 'Eloise', 'lastname': 'Gallegos', 'email': 'eloisegallegos@joviold.com', 'country': 'GB'}
        ];

        return {
            getContacts: getContacts,
            getContact: getContact,
            saveContact: saveContact,
            removeContact: removeContact
        };
  }]);
