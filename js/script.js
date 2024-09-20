'use strict';
window.addEventListener("DOMContentLoaded", () => {
    const tabs = require('./modules/tabs');
    const modal = require('./modules/modal');
    const timer = require('./modules/timer');
    const cards = require('./modules/cards');
    const slider = require('./modules/slider');
    const calculator = require('./modules/calculator');
    const form = require('./modules/form');

    tabs();
    modal();
    timer();
    cards();
    slider();
    calculator();
    form();
});
