'use strict';

module.exports = function (ele, obj) {
    for(key in obj) {
        ele.style[key] = obj[key];
    }
}