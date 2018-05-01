angular.module('gig')
    .factory('ContactService', [function () {
        var STORAGE_ID = 'GIG-Storage'

        var loadFromLocalStorage = function () {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        };

        var saveToLocalStorage = function (contacts) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(contacts));
        };

        var getContacts = function () {
          return loadFromLocalStorage();
        };

        var getContact = function (contactId) {
            return getContacts().filter(function (contact) {
                return contact.id === contactId;
            })[0];
        };

        var saveContact = function (contact) {
            var updatedContact;
            var contactList;
            if (contact.id) {
                updatedContact = angular.extend({}, getContact(contact.id), contact);
                removeContact(contact.id);
                contactList = getContacts();
            } else {
                updatedContact = angular.extend({}, contact);
                contactList = getContacts();
                var lastId = contactList.length ? Math.max(...contactList.map(function (contact) { return parseInt(contact.id, 10) })) : 0;
                updatedContact.id = String(++lastId);
            }
            contactList.push(updatedContact);
            saveToLocalStorage(contactList);
            return updatedContact;
        };

        var removeContact = function (contactId) {
            var contactList = getContacts();
            var index = contactList.map(function (contact) { return contact.id }).indexOf(contactId);
            contactList.splice(index, 1);
            saveToLocalStorage(contactList);
        };

        return {
            getContacts: getContacts,
            getContact: getContact,
            saveContact: saveContact,
            removeContact: removeContact
        };
  }]);
