// ==UserScript==
// @name         Scroll Bar Enabler
// @namespace    https://greasyfork.org/users/313414
// @version      1.0
// @description  Re-enables the scroll bar for sites that use anti-adblock scripts.
// @author       Matt-RJ
// @match        *://*/*
// @grant        unsafeWindow
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    GM_registerMenuCommand("Enable Scrolling", function() {
        var body = document.getElementsByTagName("BODY")[0];
        body.style.overflow = "visible";
    }, 'r');

})();
