/*
    String constants
    ----------------------------------------
*/
"use strict";

module.exports = {
    REDSHIFT: 'redshift',
    EASING: {
        IN: 'In',
        IN_OUT: 'InOut',
        OUT: 'Out',
        LINEAR: 'linear'
    },
    RUBIX: {
        INPUT: 'Input',
        TIME: 'Time',
        RUN: 'Run'
    },
    ERROR: {
        ACTION_EXISTS: "Action already defined. Use forceOverride: true to override.",
        NO_ACTION: "No action defined to inherit from.",
        INVALID_EASING: ": Easing not defined",
    },
    EVENT: {
        MOUSE: 'mouse',
        MOUSEMOVE: 'mousemove',
        TOUCH: 'touch',
        TOUCHMOVE: 'touchmove',
    },
    PROGRESS: {
        DIRECT: 'Direct',
        RANGE: 'Range'
    }
};