/**
 * @function UIDialog
 * @version 0.0.2
 * @desc display a Dialog
 */

export default function generateHeadingAnchors(userOptions) {

    var DOM,
        state = {};

    const defaults = {
        dialog:         '.js-dialog',
        openBtn:        '.js-dialog-btn',
        closeBtn:       '.js-dialog-close-btn',
        backdrop:       '.js-dialog-backdrop',
        isModal:        false,
        showBackdrop:   true
    };

    // Combine defaults with passed in options
    const settings = Object.assign(defaults, userOptions);

    init();

    /**
    * @function init
    * @desc Initialises the dialog
    */
    function init() {

        // Save all DOM queries for future use
        DOM = {
            'page': document.querySelectorAll('body')[0],
            'dialog': document.querySelectorAll(settings.dialog)[0],
            'openBtn': document.querySelectorAll(settings.openBtn)[0],
            'closeBtn': document.querySelectorAll(settings.closeBtn)[0],
            'backdrop': document.querySelectorAll(settings.backdrop)[0]
        };

        // Check if gallery exists, return if not
        if (DOM.dialog === undefined) { return false; }

        // Set page attribute
        DOM.page.setAttribute('data-ui-dialog', 'is-initialised');

        // Find dialog and hide if not already hidden
        DOM.dialog.classList.add('is-hidden');
        DOM.backdrop.classList.add('is-hidden');

        // Attach event listeners to buttons
        DOM.openBtn.addEventListener('click', show, false);
        DOM.closeBtn.addEventListener('click', hide, false);
        DOM.backdrop.addEventListener('click', hide, false);
        document.addEventListener('keydown', keyHandler, false);

    }

    /**
     * @function show
     */
    function show() {
        state.isOpen = true;
        DOM.dialog.classList.remove('is-hidden');
        DOM.backdrop.classList.remove('is-hidden');
        DOM.page.setAttribute('data-current-dialog', settings.dialog);
    };

    /**
     * @function hide
     */
    function hide() {
        state.isOpen = false;
        DOM.dialog.classList.add('is-hidden');
        DOM.backdrop.classList.add('is-hidden');
        DOM.page.removeAttribute('data-current-dialog');
    };

    /**
     * @function keyHandler
     * @desc Checks to see if escape (key 27) has been pressed and dialog not modal
     * @param {Event} e
     */
    function keyHandler(e) {
        if ([27].indexOf(e.which) > -1 && state.isOpen === true && !settings.isModal) {
            e.preventDefault();
            hide();
        }
    }

    ////////////

    // External API
    const module = {
        show: show,
        hide: hide
    };

    return module;
}
