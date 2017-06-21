'use strict';

module.exports = function (ele, obj) {
    for(var key in obj) {
        ele.style[key] = obj[key];
    }
}