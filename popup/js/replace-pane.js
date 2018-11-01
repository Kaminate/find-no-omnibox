'use strict';

/**
 * Create the Popup ReplacePane namespace.
 * */
Find.register('Popup.ReplacePane', function (namespace) {

    /**
     * Register event handlers.
     * */
    namespace.init = function() {
        document.getElementById('replace-next-button').addEventListener('click', () => {
            Find.Popup.BrowserAction.replaceNext();
        });

        document.getElementById('replace-all-button').addEventListener('click', () => {
            Find.Popup.BrowserAction.replaceAll();
        });
    };

    /**
     * Show or hide the replace pane.
     *
     * @param {boolean} value - True to show the pane, false to hide the pane.
     * */
    namespace.show = function(value) {
        let el = document.getElementById('replace-body');

        if(value === undefined || value) {
            el.style.display = 'inherit';
        } else {
            el.style.display = 'none';
        }
    };

    /**
     * Retrieve the text in the replace field.
     *
     * @return {string} the text in the replace field.
     * */
    namespace.getReplaceFieldText = function() {
        return document.getElementById('replace-field').value;
    };

    /**
     * Set the replace field text to the given value.
     *
     * @param {string} text - The text to place in the replace field.
     * */
    namespace.setReplaceFieldText = function(text) {
        document.getElementById('replace-field').value = text;
    };

    /**
     * Place focus on the replace field.
     * */
    namespace.focusSearchField = function() {
        document.getElementById('replace-field').focus();
    };

    /**
     * Select all the text in the replace field.
     * */
    namespace.selectSearchField = function() {
        document.getElementById('replace-field').select();
    };

    /**
     * Enable or disable the replace buttons.
     *
     * @param {boolean} enable - Undefined or true to enable the buttons, false to disable the buttons.
     * */
    namespace.enableButtons = function(enable) {
        document.getElementById('replace-next-button').disabled = enable !== undefined && !enable;
        document.getElementById('replace-all-button').disabled = enable !== undefined && !enable;
    }
});