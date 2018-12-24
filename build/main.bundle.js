/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/SiCard.js":
/*!***********************!*\
  !*** ./src/SiCard.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SiCard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _constants = __webpack_require__(/*! ./constants */ "./src/constants.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SiCard = exports.SiCard = function () {
    function SiCard(mainStation, cardNumber) {
        _classCallCheck(this, SiCard);

        this.mainStation = mainStation;
        this.cardNumber = cardNumber;
        this.clearTime = -1;
        this.checkTime = -1;
        this.startTime = -1;
        this.finishTime = -1;
        this.punches = [];
    }

    _createClass(SiCard, [{
        key: 'read',
        value: function read() {
            var typeFromCN = SiCard.typeByCardNumber(this.cardNumber);
            return SiCard.Type[typeFromCN].read(this);
        }
    }, {
        key: 'type',
        value: function type() {
            return SiCard.typeByCardNumber(this.cardNumber);
        }
    }, {
        key: 'toDict',
        value: function toDict() {
            return {
                cardNumber: this.cardNumber,
                clearTime: this.clearTime,
                checkTime: this.checkTime,
                startTime: this.startTime,
                finishTime: this.finishTime,
                punches: this.punches
            };
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.type() + ' Number: ' + this.cardNumber + '\nClear: ' + this.clearTime + '\nCheck: ' + this.checkTime + '\nStart: ' + this.startTime + '\nFinish: ' + this.finishTime + '\n' + this.punches.map(function (punch) {
                return punch.code + ': ' + punch.time;
            }).join('\n') + '\n';
        }
    }, {
        key: 'toHtml',
        value: function toHtml() {
            return this.toString().replace(/\n/g, '<br />');
        }
    }]);

    return SiCard;
}();

SiCard.Type = {
    SICard5: {
        vals: [1000, 500000],
        description: 'SI Card 5',
        read: function read(card) {
            return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI5, [], 1).then(function (d) {
                var data = d[0];
                data.splice(0, 2);
                var cn = (0, _utils.arr2big)([data[6], data[4], data[5]]);
                if (499999 < cn) {
                    console.warn('SICard5 Error: SI Card Number inconsistency: SI5 detected, but number is ' + cn + ' (not in 0 - 500\'000)');
                }
                if (data[6] < 2) {
                    cn = (0, _utils.arr2big)([data[4], data[5]]);
                } else {
                    cn = data[6] * 100000 + (0, _utils.arr2big)([data[4], data[5]]);
                }
                if (card.cardNumber !== cn) {
                    console.warn('SICard5 Error: SI Card Number inconsistency');
                }

                card.startTime = (0, _utils.arr2time)(data.slice(19, 21));
                card.finishTime = (0, _utils.arr2time)(data.slice(21, 23));
                card.checkTime = (0, _utils.arr2time)(data.slice(25, 27));
                // TODO: also read the 6(?) additional punch codes without times
                var len = Math.min(Math.max(data[23] - 1, 0), 30);
                card.punches = new Array(len);
                var ind = 32;
                for (var i = 0; i < len; i++) {
                    if (ind % 16 === 0) {
                        ind++;
                    }
                    var time = (0, _utils.arr2time)(data.slice(ind + 1, ind + 3));
                    if (0 <= time) {
                        card.punches[i] = { code: data[ind + 0], time: time };
                    } else {
                        console.warn('SICard5 Error: Undefined Time in punched range');
                    }
                    ind += 3;
                }
                card.mainStation._sendCommand(_constants.proto.ACK, [], 0);
                return card;
            });
        }
    },
    SICard6: {
        vals: [500000, 1000000, 2003000, 2004000],
        description: 'SI Card 6',
        read: function read(card) {
            return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI6, [0x08], 3).then(function (data) {
                if (data[0][2] !== 0) {
                    console.warn('SICard6 Error: First read block is ' + data[0][2] + ' (expected 0)');
                }
                if (data[1][2] !== 6) {
                    console.warn('SICard6 Error: Second read block is ' + data[1][2] + ' (expected 6)');
                }
                if (data[2][2] !== 7) {
                    console.warn('SICard6 Error: Third read block is ' + data[2][2] + ' (expected 7)');
                }
                data[0].splice(0, 3);
                data[1].splice(0, 3);
                data[2].splice(0, 3);
                var cn = (0, _utils.arr2big)([data[0][11], data[0][12], data[0][13]]);
                if (card.cardNumber !== cn) {
                    console.warn('SICard6 Error: SI Card Number inconsistency');
                }

                card.startTime = (0, _utils.arr2time)(data[0].slice(26, 28));
                card.finishTime = (0, _utils.arr2time)(data[0].slice(22, 24));
                card.checkTime = (0, _utils.arr2time)(data[0].slice(30, 32));
                card.clearTime = (0, _utils.arr2time)(data[0].slice(34, 36));
                var len = Math.min(Math.max(data[0][18] - 1, 0), 64);
                card.punches = new Array(len);
                var blk = 1;
                var ind = 0;
                for (var i = 0; i < len; i++) {
                    if (128 <= ind) {
                        blk++;
                        ind = 0;
                    }
                    var time = (0, _utils.arr2time)(data[blk].slice(ind + 2, ind + 4));
                    if (0 <= time) {
                        card.punches[i] = { code: data[blk][ind + 1], time: time };
                    } else {
                        console.warn('SICard6 Error: Undefined Time in punched range');
                    }
                    ind += 4;
                }
                card.mainStation._sendCommand(_constants.proto.ACK, [], 0);
                return card;
            });
        }
    },
    SICard8: {
        vals: [2000000, 2003000, 2004000, 3000000],
        description: 'SI Card 8',
        read: function read(card) {
            var len = undefined;
            return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x00], 1).then(function (data0) {
                console.assert(data0[0][2] === 0, 'Inconsistent');
                var page0 = data0[0].slice(3);
                var cn = (0, _utils.arr2big)([page0[25], page0[26], page0[27]]);
                if (card.cardNumber !== cn) {
                    console.warn('SICard8 Error: SI Card Number inconsistency');
                }

                card.startTime = (0, _utils.arr2time)(page0.slice(14, 16));
                card.finishTime = (0, _utils.arr2time)(page0.slice(18, 20));
                card.checkTime = (0, _utils.arr2time)(page0.slice(10, 12));
                len = Math.min(Math.max(page0[22], 0), 128);
                card.punches = new Array(len);

                return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x01], 1);
            }).then(function (data1) {
                console.assert(data1[0][2] === 1, 'Inconsistent');
                var page1 = data1[0].slice(3);
                for (var i = 0; i < 30; i++) {
                    if (i >= len) {
                        break;
                    }
                    var time = (0, _utils.arr2time)(page1.slice(i * 4 + 10, i * 4 + 12));
                    if (0 <= time) {
                        card.punches[i] = {
                            code: page1[i * 4 + 9],
                            time: time
                        };
                    } else {
                        console.warn('SICard8 Error: Undefined Time in punched range');
                    }
                }
                return card.mainStation._sendCommand(_constants.proto.ACK, [], 0).then(function () {
                    return card;
                });
            });
        }
    },
    SICard9: {
        vals: [1000000, 2000000],
        description: 'SI Card 9',
        read: function read(card) {
            var len = undefined;
            return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x00], 1).then(function (data0) {
                console.assert(data0[0][2] === 0, 'Inconsistent');
                var page0 = data0[0].slice(3);
                var cn = (0, _utils.arr2big)([page0[25], page0[26], page0[27]]);
                if (card.cardNumber !== cn) {
                    console.warn('SICard9 Error: SI Card Number inconsistency');
                }

                card.startTime = (0, _utils.arr2time)(page0.slice(14, 16));
                card.finishTime = (0, _utils.arr2time)(page0.slice(18, 20));
                card.checkTime = (0, _utils.arr2time)(page0.slice(10, 12));
                len = Math.min(Math.max(page0[22], 0), 128);
                card.punches = new Array(len);

                var isLastBlock = false;
                for (var i = 0; i < 18; i++) {
                    if (i >= len) {
                        isLastBlock = true;
                        break;
                    }
                    var time = (0, _utils.arr2time)(page0.slice(i * 4 + 58, i * 4 + 60));
                    if (0 <= time) {
                        card.punches[i] = {
                            code: page0[i * 4 + 57],
                            time: time
                        };
                    } else {
                        console.warn('SICard9 Error: Undefined Time in punched range');
                    }
                }
                if (isLastBlock) {
                    return card.mainStation._sendCommand(_constants.proto.ACK, [], 0).then(function () {
                        return card;
                    });
                }

                return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x01], 1).then(function (data1) {
                    console.assert(data1[0][2] === 1, 'Inconsistent');
                    var page1 = data1[0].slice(3);
                    for (var _i = 18; _i < 50; _i++) {
                        if (_i >= len) {
                            break;
                        }
                        var _time = (0, _utils.arr2time)(page1.slice(_i * 4 - 70, _i * 4 - 68));
                        if (0 <= _time) {
                            card.punches[_i] = {
                                code: page1[_i * 4 - 71],
                                time: _time
                            };
                        } else {
                            console.warn('SICard9 Error: Undefined Time in punched range');
                        }
                    }
                    return card.mainStation._sendCommand(_constants.proto.ACK, [], 0).then(function () {
                        return card;
                    });
                });
            });
        }
    },
    SICard10: {
        vals: [7000000, 8000000],
        description: 'SI Card 10',
        read: function read(card) {
            var readSiCard10TimeBlock = function readSiCard10TimeBlock(blockData, punchData, blockIndex, punchCount) {
                var isLastBlock = false;
                var punchesPerBlock = 32;
                for (var i = 0; i < punchesPerBlock; i++) {
                    if (blockIndex * punchesPerBlock + i >= punchCount) {
                        isLastBlock = true;
                        break;
                    }
                    var time = (0, _utils.arr2time)(blockData.slice(i * 4 + 2, i * 4 + 4));
                    if (0 <= time) {
                        punchData[blockIndex * punchesPerBlock + i] = {
                            code: blockData[i * 4 + 1],
                            time: time
                        };
                    } else {
                        console.warn('SICard10 Error: Undefined Time in punched range');
                    }
                }
                return isLastBlock;
            };
            var len = undefined;
            return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x00], 1).then(function (data0) {
                console.assert(data0[0][2] === 0, 'Inconsistent');
                var page0 = data0[0].slice(3);
                var cn = (0, _utils.arr2big)([page0[25], page0[26], page0[27]]);
                if (card.cardNumber !== cn) {
                    console.warn('SICard10 Error: SI Card Number inconsistency');
                }

                card.startTime = (0, _utils.arr2time)(page0.slice(14, 16));
                card.finishTime = (0, _utils.arr2time)(page0.slice(18, 20));
                card.checkTime = (0, _utils.arr2time)(page0.slice(10, 12));
                len = Math.min(Math.max(page0[22], 0), 128);
                card.punches = new Array(len);

                return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x04], 1);
            }).then(function (data4) {
                console.assert(data4[0][2] === 4, 'Inconsistent');
                var page4 = data4[0].slice(3);
                var is4LastBlock = readSiCard10TimeBlock(page4, card.punches, 0, len);
                if (is4LastBlock) {
                    return card.mainStation._sendCommand(_constants.proto.ACK, [], 0).then(function () {
                        return card;
                    });
                }
                return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x05], 1).then(function (data5) {
                    console.assert(data5[0][2] === 5, 'Inconsistent');
                    var page5 = data5[0].slice(3);
                    var is5LastBlock = readSiCard10TimeBlock(page5, card.punches, 1, len);
                    if (is5LastBlock) {
                        return card.mainStation._sendCommand(_constants.proto.ACK, [], 0).then(function () {
                            return card;
                        });
                    }
                    return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x06], 1).then(function (data6) {
                        console.assert(data6[0][2] === 6, 'Inconsistent');
                        var page6 = data6[0].slice(3);
                        var is6LastBlock = readSiCard10TimeBlock(page6, card.punches, 2, len);
                        if (is6LastBlock) {
                            return card.mainStation._sendCommand(_constants.proto.ACK, [], 0).then(function () {
                                return card;
                            });
                        }
                        return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x07], 1).then(function (data7) {
                            console.assert(data7[0][2] === 7, 'Inconsistent');
                            var page7 = data7[0].slice(3);
                            readSiCard10TimeBlock(page7, card.punches, 3, len);
                            return card.mainStation._sendCommand(_constants.proto.ACK, [], 0).then(function () {
                                return card;
                            });
                        });
                    });
                });
            });
        }
    },
    SICard11: {
        vals: [9000000, 10000000],
        description: 'SI Card 11',
        read: function read(card) {
            var readSiCard11TimeBlock = function readSiCard11TimeBlock(blockData, punchData, blockIndex, punchCount) {
                var isLastBlock = false;
                var punchesPerBlock = 32;
                for (var i = 0; i < punchesPerBlock; i++) {
                    if (blockIndex * punchesPerBlock + i >= punchCount) {
                        isLastBlock = true;
                        break;
                    }
                    var time = (0, _utils.arr2time)(blockData.slice(i * 4 + 2, i * 4 + 4));
                    if (0 <= time) {
                        punchData[blockIndex * punchesPerBlock + i] = {
                            code: blockData[i * 4 + 1],
                            time: time
                        };
                    } else {
                        console.warn('SICard11 Error: Undefined Time in punched range');
                    }
                }
                return isLastBlock;
            };
            var len = undefined;
            return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x00], 1).then(function (data0) {
                console.assert(data0[0][2] === 0, 'Inconsistent');
                var page0 = data0[0].slice(3);
                var cn = (0, _utils.arr2big)([page0[25], page0[26], page0[27]]);
                if (card.cardNumber !== cn) {
                    console.warn('SICard11 Error: SI Card Number inconsistency');
                }

                card.startTime = (0, _utils.arr2time)(page0.slice(14, 16));
                card.finishTime = (0, _utils.arr2time)(page0.slice(18, 20));
                card.checkTime = (0, _utils.arr2time)(page0.slice(10, 12));
                len = Math.min(Math.max(page0[22], 0), 128);
                card.punches = new Array(len);

                return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x04], 1);
            }).then(function (data4) {
                console.assert(data4[0][2] === 4, 'Inconsistent');
                var page4 = data4[0].slice(3);
                var is4LastBlock = readSiCard11TimeBlock(page4, card.punches, 0, len);
                if (is4LastBlock) {
                    return card.mainStation._sendCommand(_constants.proto.ACK, [], 0).then(function () {
                        return card;
                    });
                }
                return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x05], 1).then(function (data5) {
                    console.assert(data5[0][2] === 5, 'Inconsistent');
                    var page5 = data5[0].slice(3);
                    var is5LastBlock = readSiCard11TimeBlock(page5, card.punches, 1, len);
                    if (is5LastBlock) {
                        return card.mainStation._sendCommand(_constants.proto.ACK, [], 0).then(function () {
                            return card;
                        });
                    }
                    return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x06], 1).then(function (data6) {
                        console.assert(data6[0][2] === 6, 'Inconsistent');
                        var page6 = data6[0].slice(3);
                        var is6LastBlock = readSiCard11TimeBlock(page6, card.punches, 2, len);
                        if (is6LastBlock) {
                            return card.mainStation._sendCommand(_constants.proto.ACK, [], 0).then(function () {
                                return card;
                            });
                        }
                        return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x07], 1).then(function (data7) {
                            console.assert(data7[0][2] === 7, 'Inconsistent');
                            var page7 = data7[0].slice(3);
                            readSiCard11TimeBlock(page7, card.punches, 3, len);
                            return card.mainStation._sendCommand(_constants.proto.ACK, [], 0).then(function () {
                                return card;
                            });
                        });
                    });
                });
            });
        }
    },
    SIAC: {
        vals: [8000000, 9000000],
        description: 'SIAC',
        read: function read(card) {
            var readSIACTimeBlock = function readSIACTimeBlock(blockData, punchData, blockIndex, punchCount) {
                var isLastBlock = false;
                var punchesPerBlock = 32;
                for (var i = 0; i < punchesPerBlock; i++) {
                    if (blockIndex * punchesPerBlock + i >= punchCount) {
                        isLastBlock = true;
                        break;
                    }
                    var time = (0, _utils.arr2time)(blockData.slice(i * 4 + 2, i * 4 + 4));
                    if (0 <= time) {
                        punchData[blockIndex * punchesPerBlock + i] = {
                            code: blockData[i * 4 + 1],
                            time: time
                        };
                    } else {
                        console.warn('SIAC Error: Undefined Time in punched range');
                    }
                }
                return isLastBlock;
            };
            var len = undefined;
            return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x00], 1).then(function (data0) {
                console.assert(data0[0][2] === 0, 'Inconsistent');
                var page0 = data0[0].slice(3);
                var cn = (0, _utils.arr2big)([page0[25], page0[26], page0[27]]);
                if (card.cardNumber !== cn) {
                    console.warn('SIAC Error: SI Card Number inconsistency');
                }

                card.startTime = (0, _utils.arr2time)(page0.slice(14, 16));
                card.finishTime = (0, _utils.arr2time)(page0.slice(18, 20));
                card.checkTime = (0, _utils.arr2time)(page0.slice(10, 12));
                len = Math.min(Math.max(page0[22], 0), 128);
                card.punches = new Array(len);

                return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x04], 1);
            }).then(function (data4) {
                console.assert(data4[0][2] === 4, 'Inconsistent');
                var page4 = data4[0].slice(3);
                var is4LastBlock = readSIACTimeBlock(page4, card.punches, 0, len);
                if (is4LastBlock) {
                    return card.mainStation._sendCommand(_constants.proto.ACK, [], 0).then(function () {
                        return card;
                    });
                }
                return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x05], 1).then(function (data5) {
                    console.assert(data5[0][2] === 5, 'Inconsistent');
                    var page5 = data5[0].slice(3);
                    var is5LastBlock = readSIACTimeBlock(page5, card.punches, 1, len);
                    if (is5LastBlock) {
                        return card.mainStation._sendCommand(_constants.proto.ACK, [], 0).then(function () {
                            return card;
                        });
                    }
                    return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x06], 1).then(function (data6) {
                        console.assert(data6[0][2] === 6, 'Inconsistent');
                        var page6 = data6[0].slice(3);
                        var is6LastBlock = readSIACTimeBlock(page6, card.punches, 2, len);
                        if (is6LastBlock) {
                            return card.mainStation._sendCommand(_constants.proto.ACK, [], 0).then(function () {
                                return card;
                            });
                        }
                        return card.mainStation._sendCommand(_constants.proto.cmd.GET_SI8, [0x07], 1).then(function (data7) {
                            console.assert(data7[0][2] === 7, 'Inconsistent');
                            var page7 = data7[0].slice(3);
                            readSIACTimeBlock(page7, card.punches, 3, len);
                            return card.mainStation._sendCommand(_constants.proto.ACK, [], 0).then(function () {
                                return card;
                            });
                        });
                    });
                });
            });
        }
    },
    PCard: { vals: [4000000, 5000000], description: 'pCard', read: function read(_card) {
            return undefined;
        } },
    TCard: { vals: [6000000, 7000000], description: 'tCard', read: function read(_card) {
            return undefined;
        } },
    FCard: { vals: [14000000, 15000000], description: 'fCard', read: function read(_card) {
            return undefined;
        } }
};

SiCard.typeByCardNumber = function (cn) {
    if (!SiCard._typeLookup) {
        SiCard._typeLookup = { borderList: [], borderLookup: {} };
        Object.keys(SiCard.Type).map(function (k) {
            var vals = SiCard.Type[k].vals;
            if (vals.length % 2 !== 0) {
                throw new Error('SiCard.Type.' + k + ': vals length is ' + vals.length + '?!? (must be even)');
            }
            var lastEvenVal = 0;
            for (var i = 0; i < vals.length; i++) {
                var borderList = SiCard._typeLookup.borderList;
                var _j = void 0;
                for (_j = 0; _j < borderList.length && borderList[_j] < vals[i]; _j++) {
                    // TODO: binary search here
                }
                var borderExisted = SiCard._typeLookup.borderList[_j] === vals[i];
                if (!borderExisted) {
                    SiCard._typeLookup.borderList.splice(_j, 0, vals[i]);
                }
                if (i % 2 === 0) {
                    var collidingRange = void 0;
                    if (borderExisted) {
                        collidingRange = SiCard._typeLookup.borderLookup[vals[i]];
                        if (collidingRange) {
                            throw new Error('SiCard.Type.' + k + ': ' + vals[i] + ' would collide with ' + collidingRange);
                        }
                    }
                    if (!borderExisted && 0 < _j) {
                        collidingRange = SiCard._typeLookup.borderLookup[SiCard._typeLookup.borderList[_j - 1]];
                        if (collidingRange) {
                            throw new Error('SiCard.Type.' + k + ': ' + vals[i] + ' would collide with ' + collidingRange);
                        }
                    }
                    SiCard._typeLookup.borderLookup[vals[i]] = k;
                    lastEvenVal = vals[i];
                } else {
                    if (lastEvenVal !== SiCard._typeLookup.borderList[_j - 1]) {
                        throw new Error('SiCard.Type.' + k + ': ' + vals[i] + ' is not an immediate follow-up of ' + lastEvenVal);
                    }
                    if (!SiCard._typeLookup.borderLookup[vals[i]]) {
                        SiCard._typeLookup.borderLookup[vals[i]] = false;
                    }
                }
            }
        });
    }
    var j = void 0;
    for (j = 0; j < SiCard._typeLookup.borderList.length && SiCard._typeLookup.borderList[j] <= cn; j++) {
        // TODO: binary search here
    }
    if (j === 0) {
        return false;
    }
    return SiCard._typeLookup.borderLookup[SiCard._typeLookup.borderList[j - 1]];
};

/***/ }),

/***/ "./src/SiMainStation.js":
/*!******************************!*\
  !*** ./src/SiMainStation.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SiMainStation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _constants = __webpack_require__(/*! ./constants */ "./src/constants.js");

var _SiCard = __webpack_require__(/*! ./SiCard */ "./src/SiCard.js");

var _SiStation2 = __webpack_require__(/*! ./SiStation */ "./src/SiStation.js");

var _drivers = __webpack_require__(/*! ./drivers */ "./src/drivers/index.js");

var drivers = _interopRequireWildcard(_drivers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SendTask = function () {
    function SendTask(command, parameters, numResponses, resolve, reject, timeout) {
        var _this = this;

        _classCallCheck(this, SendTask);

        this.command = command;
        this.parameters = parameters;
        this.numResponses = numResponses;
        this.resolve = resolve;
        this.reject = reject;
        this.timeout = timeout;
        this.state = SendTask.State.QUEUED;
        this.timeoutTimer = setTimeout(function () {
            if (_this.state !== SendTask.State.SENT) {
                return;
            }
            console.debug('Timeout: cmd ' + (0, _utils.prettyHex)([_this.command]) + ' (expected ' + _this.numResponses + ' responses)', _this.responses);
            _this.fail();
        }, timeout * 1000);
        this.responses = [];
    }

    _createClass(SendTask, [{
        key: 'addResponse',
        value: function addResponse(response) {
            this.responses.push(response);
            if (this.responses.length === this.numResponses) {
                this.succeed();
            }
        }
    }, {
        key: 'succeed',
        value: function succeed() {
            this.state = SendTask.State.SUCCEEDED;
            clearTimeout(this.timeoutTimer);
            this.resolve(this);
        }
    }, {
        key: 'fail',
        value: function fail() {
            this.state = SendTask.State.FAILED;
            clearTimeout(this.timeoutTimer);
            this.reject(this);
        }
    }]);

    return SendTask;
}();

SendTask.State = {
    QUEUED: 0,
    SENT: 1,
    SUCCEEDED: 2,
    FAILED: 3
};

var SiMainStation = exports.SiMainStation = function (_SiStation) {
    _inherits(SiMainStation, _SiStation);

    function SiMainStation(device) {
        var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SiMainStation.State.Closed;

        _classCallCheck(this, SiMainStation);

        var _this2 = _possibleConstructorReturn(this, (SiMainStation.__proto__ || Object.getPrototypeOf(SiMainStation)).call(this, null));

        _this2.mainStation = _this2;
        _this2.device = device;
        _this2.card = false;
        _this2.onRemoved = false;
        _this2.onStateChanged = false;
        _this2.onCardInserted = false;
        _this2.onCard = false;
        _this2.onCardRemoved = false;
        _this2._sendQueue = [];
        _this2._respBuffer = [];
        _this2._deviceOpenTimer = false;
        _this2._deviceOpenNumErrors = 0;
        _this2.state = state;
        if (!SiMainStation.allByDevice[device.ident]) {
            SiMainStation.allByDevice[device.ident] = _this2;
            try {
                SiMainStation.onAdded(_this2);
            } catch (err) {
                // ignore
            }
        }
        if (_this2.state === SiMainStation.State.Closed) {
            _this2._deviceOpen();
        }
        return _this2;
    }

    _createClass(SiMainStation, [{
        key: 'resetCardCallbacks',
        value: function resetCardCallbacks() {
            this.onCardInserted = false;
            this.onCard = false;
            this.onCardRemoved = false;
        }
    }, {
        key: '_dispatch',
        value: function _dispatch(f, args) {
            if (f) {
                setTimeout(function () {
                    return f.apply(undefined, _toConsumableArray(args));
                }, 1);
            }
        }
    }, {
        key: '_changeState',
        value: function _changeState(newState) {
            this.state = newState;
            if (this.onStateChanged) {
                this.onStateChanged(this.state);
            }
        }
    }, {
        key: '_deviceOpen',
        value: function _deviceOpen() {
            var _this3 = this;

            this._changeState(SiMainStation.State.Opening);
            this.device.driver.open(this).then(function () {
                _this3._changeState(SiMainStation.State.Starting);
                _this3._deviceOpenNumErrors = 0;
                _this3._sendCommand(_constants.proto.cmd.GET_MS, [0x00], 1, 5).then(function () {
                    _this3._changeState(SiMainStation.State.Ready);
                }).catch(function (err) {
                    _this3._changeState(SiMainStation.State.Closed);
                    console.error('Could not communicate after having opened SiMainStation: ', err);
                    _this3._retryDeviceOpen();
                });
            }).catch(function (err) {
                console.error('Could not open SiMainStation: ', err);
                _this3._retryDeviceOpen();
            });
        }
    }, {
        key: '_retryDeviceOpen',
        value: function _retryDeviceOpen() {
            var _this4 = this;

            var scheduleReopen = function scheduleReopen() {
                if (!_this4._deviceOpenTimer) {
                    var timeout = 100;
                    for (var i = 0; i < _this4._deviceOpenNumErrors && i < 10; i++) {
                        timeout = timeout * 2;
                    }
                    _this4._deviceOpenTimer = setTimeout(function () {
                        _this4._deviceOpenTimer = false;
                        _this4._deviceOpen();
                    }, timeout);
                    _this4._deviceOpenNumErrors++;
                }
            };
            this.device.driver.close(this).then(function () {
                scheduleReopen();
            }).catch(function (err) {
                console.error('Could not close device: ', err);
                scheduleReopen();
            });
        }
    }, {
        key: '_logReceive',
        value: function _logReceive(bufView) {
            console.debug('<= ' + (0, _utils.prettyHex)(bufView) + '     (' + this.device.driver.name + '; ' + this._respBuffer.length + ')');
        }
    }, {
        key: '_processReceiveBuffer',
        value: function _processReceiveBuffer() {
            var _this5 = this;

            var continueProcessing = function continueProcessing() {
                var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                return setTimeout(function () {
                    return _this5._processReceiveBuffer();
                }, timeout);
            };
            var message = (0, _utils.processSiProto)(this._respBuffer);
            if (message === null) {
                return null;
            }
            var mode = message.mode,
                command = message.command,
                parameters = message.parameters;

            if (mode === _constants.proto.NAK) {
                if (0 < this._sendQueue.length && this._sendQueue[0].state === SendTask.State.SENT) {
                    this._sendQueue[0].fail();
                }
                return continueProcessing();
            }
            var cn = void 0,
                typeFromCN = void 0;
            if (command === _constants.proto.cmd.SI5_DET) {
                cn = (0, _utils.arr2cardNumber)([parameters[5], parameters[4], parameters[3]]);
                this.card = new _SiCard.SiCard(this, cn);
                console.log('SI5 DET', this.card, parameters);
                this._dispatch(this.onCardInserted, [this.card]);
                this.card.read().then(function (card) {
                    _this5._dispatch(_this5.onCard, [card]);
                });
                return continueProcessing();
            }
            if (command === _constants.proto.cmd.SI6_DET) {
                cn = (0, _utils.arr2cardNumber)([parameters[5], parameters[4], parameters[3]]);
                typeFromCN = _SiCard.SiCard.typeByCardNumber(cn);
                if (typeFromCN !== 'SICard6') {
                    console.warn('SICard6 Error: SI Card Number inconsistency: Function SI6 called, but number is ' + cn + ' (=> ' + typeFromCN + ')');
                }
                this.card = new _SiCard.SiCard(this, cn);
                console.log('SI6 DET', parameters);
                this._dispatch(this.onCardInserted, [this.card]);
                this.card.read().then(function (card) {
                    _this5._dispatch(_this5.onCard, [card]);
                });
                return continueProcessing();
            }
            if (command === _constants.proto.cmd.SI8_DET) {
                cn = (0, _utils.arr2cardNumber)([parameters[5], parameters[4], parameters[3]]);
                typeFromCN = _SiCard.SiCard.typeByCardNumber(cn);
                if (!{ 'SICard8': 1, 'SICard9': 1, 'SICard10': 1, 'SICard11': 1 }[typeFromCN]) {
                    console.warn('SICard8 Error: SI Card Number inconsistency: Function SI8 called, but number is ' + cn + ' (=> ' + typeFromCN + ')');
                }
                this.card = new _SiCard.SiCard(this, cn);
                console.log('SI8 DET', parameters);
                this._dispatch(this.onCardInserted, [this.card]);
                this.card.read().then(function (card) {
                    _this5._dispatch(_this5.onCard, [card]);
                });
                return continueProcessing();
            }
            if (command === _constants.proto.cmd.SI_REM) {
                cn = (0, _utils.arr2cardNumber)([parameters[5], parameters[4], parameters[3]]);
                console.log('SI REM', parameters, cn, this.card);
                if (this.card !== false && this.card.cardNumber === cn) {
                    this._dispatch(this.onCardRemoved, [this.card]);
                } else {
                    console.warn('Card ' + cn + ' was removed, but never inserted');
                }
                this.card = false;
                if (this._sendQueue.length > 0 && this._sendQueue[0].state === SendTask.State.SENT && 0xB0 <= this._sendQueue[0].command && this._sendQueue[0].command <= 0xEF) {
                    // Was expecting response from card => "early Timeout"
                    console.debug('Early Timeout: cmd ' + (0, _utils.prettyHex)([this._sendQueue[0].command]) + ' (expected ' + this._sendQueue[0].numResponses + ' responses)', this._sendQueue[0].responses);
                    this._sendQueue[0].fail();
                }
                return continueProcessing();
            }
            if (command === _constants.proto.cmd.TRANS_REC) {
                cn = (0, _utils.arr2big)([parameters[3], parameters[4], parameters[5]]);
                if (cn < 500000) {
                    if (parameters[3] < 2) {
                        cn = (0, _utils.arr2big)([parameters[4], parameters[5]]);
                    } else {
                        cn = parameters[3] * 100000 + (0, _utils.arr2big)([parameters[4], parameters[5]]);
                    }
                }
                var transRecordCard = new _SiCard.SiCard(this, cn);
                console.log('TRANS_REC', transRecordCard, parameters);
                this._dispatch(this.onCardInserted, [transRecordCard]);
                this._dispatch(this.onCardRemoved, [transRecordCard]);
                return continueProcessing();
            }
            if (this._sendQueue.length === 0 || this._sendQueue[0].state !== SendTask.State.SENT) {
                console.warn('Strange Response: ' + (0, _utils.prettyHex)([command]) + ' (not expecting anything)...');
                return continueProcessing();
            }
            if (this._sendQueue[0].command !== command) {
                console.warn('Strange Response: expected ' + (0, _utils.prettyHex)([this._sendQueue[0].command]) + ', but got ' + (0, _utils.prettyHex)([command]) + '...');
                return continueProcessing();
            }
            this._sendQueue[0].addResponse(parameters);
            return continueProcessing();
        }
    }, {
        key: '_processSendQueue',
        value: function _processSendQueue() {
            var _this6 = this;

            if (this.state !== SiMainStation.State.Starting && this.state !== SiMainStation.State.Ready) {
                return setTimeout(function () {
                    return _this6._processSendQueue();
                }, 100);
            }
            if (this._sendQueue.length === 0 || this._sendQueue[0].state === SendTask.State.SENT) {
                return null;
            }
            var sendTask = this._sendQueue[0];

            // Build command
            var commandString = [sendTask.command, sendTask.parameters.length].concat(sendTask.parameters);
            var crc = (0, _utils.CRC16)(commandString);
            var cmd = String.fromCharCode(_constants.proto.STX);
            var i = void 0;
            for (i = 0; i < commandString.length; i++) {
                cmd += String.fromCharCode(commandString[i]);
            }
            for (i = 0; i < crc.length; i++) {
                cmd += String.fromCharCode(crc[i]);
            }
            cmd += String.fromCharCode(_constants.proto.ETX);

            // Send command
            var bstr = String.fromCharCode(_constants.proto.WAKEUP) + cmd;
            var bytes = new Uint8Array(bstr.length);
            for (i = 0; i < bstr.length; i++) {
                bytes[i] = bstr.charCodeAt(i);
            }
            this.device.driver.send(this, bytes.buffer).then(function () {
                console.debug('=> ' + (0, _utils.prettyHex)(bstr) + '     (' + _this6.device.driver.name + ')');
                if (sendTask.numResponses <= 0) {
                    sendTask.succeed();
                }
            }).catch(function (err) {
                console.warn(err);
                sendTask.fail();
            });
            sendTask.state = SendTask.State.SENT;
            return null;
        }
    }, {
        key: '_sendCommand',
        value: function _sendCommand(command, parameters, numRespArg, timeoutArg) {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
                var numResponses = numRespArg ? numRespArg : 0;
                var timeout = timeoutArg ? timeoutArg : 10;

                var sendTask = new SendTask(command, parameters, numResponses, function (resolvedTask) {
                    var shifted = _this7._sendQueue.shift();
                    if (resolvedTask !== shifted) {
                        throw new Error('Resolved unexecuting SendTask');
                    }
                    setTimeout(function () {
                        return _this7._processSendQueue();
                    }, 1);
                    resolve(resolvedTask.responses);
                }, function (rejectedTask) {
                    var shifted = _this7._sendQueue.shift();
                    if (rejectedTask !== shifted) {
                        throw new Error('Rejected unexecuting SendTask');
                    }
                    setTimeout(function () {
                        return _this7._processSendQueue();
                    }, 1);
                    reject(new Error('Rejection'));
                }, timeout);
                _this7._sendQueue.push(sendTask);
                _this7._processSendQueue();
            });
        }
    }, {
        key: '_remove',
        value: function _remove() {
            if (0 < this._sendQueue.length && this._sendQueue[0].state !== -1) {
                clearTimeout(this._sendQueue[0].timeoutTimer);
            }
            clearTimeout(this._deviceOpenTimer);
            delete SiMainStation.allByDevice[this.device.ident];
            try {
                SiMainStation.onRemoved(this);
            } catch (err) {
                // ignore
            }
            try {
                this.onRemoved();
            } catch (err) {
                // ignore
            }
        }
    }]);

    return SiMainStation;
}(_SiStation2.SiStation);

SiMainStation.State = { // TODO: maybe include instructions in description?
    Closed: 0,
    Opening: 1,
    Starting: 2,
    Ready: 3
};

SiMainStation.allByDevice = {};
SiMainStation.all = function () {
    var arr = [];
    Object.keys(SiMainStation.allByDevice).map(function (deviceIdent) {
        arr.push(SiMainStation.allByDevice[deviceIdent]);
    });
    return arr;
};
SiMainStation.startDeviceDetection = function () {
    var runDeviceDetection = function runDeviceDetection() {
        Object.keys(drivers).map(function (k) {
            try {
                var driver = new drivers[k]();
                if (driver && driver.name && driver.detect && driver.send && driver.open && driver.close) {
                    driver.detect(SiMainStation);
                } else {
                    console.warn('Not a driver:', k);
                }
            } catch (err) {
                console.warn('Error in device detection:', err);
            }
        });
        if (SiMainStation.detectionTimeout) {
            clearTimeout(SiMainStation.detectionTimeout);
        }
        SiMainStation.detectionTimeout = setTimeout(runDeviceDetection, 1000);
    };
    runDeviceDetection();
};
SiMainStation.newDevice = function () {
    Object.keys(drivers).map(function (k) {
        try {
            var driver = new drivers[k]();
            if (driver && driver.name && driver.detect && driver.send && driver.open && driver.close) {
                driver.new(SiMainStation);
            } else {
                console.warn('Not a driver:', k);
            }
        } catch (err) {
            console.warn('Error in device detection:', err);
        }
    });
};
SiMainStation.onAdded = function (_ms) {
    return undefined;
};
SiMainStation.onRemoved = function (_ms) {
    return undefined;
};

/***/ }),

/***/ "./src/SiStation.js":
/*!**************************!*\
  !*** ./src/SiStation.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SiStation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _constants = __webpack_require__(/*! ./constants */ "./src/constants.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SiStation = exports.SiStation = function () {
    function SiStation(mainStation) {
        _classCallCheck(this, SiStation);

        this.mainStation = mainStation;
        this._info = {};
        this._infoTime = 0;
        this._infoSubscribers = [];
    }

    _createClass(SiStation, [{
        key: 'readInfo',
        value: function readInfo(force) {
            var _this = this;

            var now = new Date().getTime();
            if (!force && now < this._infoTime + 60000) {
                return (0, _utils.timeoutResolvePromise)(this._info);
            }
            if (!force && 0 < this._infoSubscribers.length) {
                return new Promise(function (resolve, reject) {
                    _this._infoSubscribers.push({ resolve: resolve, reject: reject });
                });
            }
            return this.mainStation._sendCommand(_constants.proto.cmd.GET_SYS_VAL, [0x00, 0x80], 1).then(function (d) {
                var data = d[0];
                data.splice(0, 3);
                _this._infoTime = new Date().getTime();
                _this._info = {};
                _this._info._raw = data;
                _this._info.serialNumber = (0, _utils.arr2big)(data.slice(0x00, 0x04));
                _this._info.firmwareVersion = (0, _utils.arr2big)(data.slice(0x05, 0x08));
                _this._info.buildDate = (0, _utils.arr2date)(data.slice(0x08, 0x0B));
                _this._info.deviceModel = SiStation.modelLookup()[(0, _utils.arr2big)(data.slice(0x0B, 0x0D))];
                _this._info.memorySize = (0, _utils.arr2big)(data.slice(0x0D, 0x0E));
                _this._info.refreshRate = data[0x10]; // in 3/sec
                _this._info.powerMode = data[0x11]; // 06 low power, 08 standard/sprint
                _this._info.batteryDate = (0, _utils.arr2date)(data.slice(0x15, 0x18));
                _this._info.batteryCapacity = (0, _utils.arr2big)(data.slice(0x19, 0x1B));
                _this._info.backupPointer = (0, _utils.arr2big)(data.slice(0x1C, 0x1E).concat(data.slice(0x21, 0x23)));
                _this._info.siCard6Mode = (0, _utils.arr2big)(data.slice(0x33, 0x34));
                _this._info.memoryOverflow = (0, _utils.arr2big)(data.slice(0x3D, 0x3E));
                _this._info.interval = (0, _utils.arr2big)(data.slice(0x48, 0x4A));
                _this._info.wtf = (0, _utils.arr2big)(data.slice(0x4A, 0x4C));
                _this._info.program = data[0x70];
                _this._info.mode = SiStation.modeLookup()[data[0x71]];
                _this._info.code = data[0x72] + ((data[0x73] & 0xC0) << 2);
                _this._info.beeps = data[0x73] >> 2 & 0x01;
                _this._info.flashes = data[0x73] & 0x01;
                _this._info.extendedProtocol = data[0x74] & 0x01;
                _this._info.autoSend = data[0x74] >> 1 & 0x01;
                _this._info.handshake = data[0x74] >> 2 & 0x01;
                _this._info.sprint4ms = data[0x74] >> 3 & 0x01;
                _this._info.passwordOnly = data[0x74] >> 4 & 0x01;
                _this._info.stopOnFullBackup = data[0x74] >> 5 & 0x01;
                _this._info.autoReadout = data[0x74] >> 7 & 0x01;
                _this._info.lastWriteDate = (0, _utils.arr2date)(data.slice(0x75, 0x7B));
                // this._info.autoOffTimeout = arr2date([0, 1, 1].concat(data.slice(0x7B, 0x7E)));
                _this._info.autoOffTimeout = (0, _utils.arr2big)(data.slice(0x7E, 0x80));
                _this._infoSubscribers.map(function (infoSubscriber) {
                    return setTimeout(function () {
                        return infoSubscriber.resolve(_this._info);
                    }, 1);
                });
                _this._infoSubscribers = [];
                console.log('INFO READ', _this._info);
                return _this._info;
            }).catch(function (_err) {
                _this._infoSubscribers.map(function (infoSubscriber) {
                    return setTimeout(function () {
                        return infoSubscriber.reject();
                    }, 1);
                });
                _this._infoSubscribers = [];
                throw new Error('READ INFO');
            });
        }
    }, {
        key: 'time',
        value: function time(newTime) {
            if (newTime === undefined) {
                return this.mainStation._sendCommand(_constants.proto.cmd.GET_TIME, [], 1).then(function (d) {
                    return (0, _utils.arr2date)(d[0].slice(2));
                });
            }
            // TODO: compensate for waiting time
            var secs = newTime.getHours() % 12 * 3600 + newTime.getMinutes() * 60 + newTime.getSeconds();
            var params = [newTime.getFullYear() % 100, newTime.getMonth() + 1, newTime.getDate(), (newTime.getDay() << 1) + Math.floor(newTime.getHours() / 12), secs >> 8, secs & 0xFF, Math.floor(newTime.getMilliseconds() * 256 / 1000)];
            return this.mainStation._sendCommand(_constants.proto.cmd.SET_TIME, params, 1).then(function (d) {
                return (0, _utils.arr2date)(d[0].slice(2));
            });
        }
    }, {
        key: 'signal',
        value: function signal(countArg) {
            var count = !countArg || countArg < 1 ? 1 : countArg;
            return this.mainStation._sendCommand(_constants.proto.cmd.SIGNAL, [count], 1).then(function (data) {
                if (data[0][2] !== count) {
                    throw new Error('NUM BEEPS');
                }
            });
        }
    }, {
        key: 'powerOff',
        value: function powerOff() {
            // Does not power off BSM8 (USB powered), though
            return this.mainStation._sendCommand(_constants.proto.cmd.OFF, [], 0);
        }
    }, {
        key: 'info',
        value: function info(property, paramsFunc, newValue) {
            var _this2 = this;

            if (newValue === undefined) {
                return this.readInfo(false).then(function (info) {
                    return info[property];
                });
            }
            var params = undefined;
            return this.readInfo(false).then(function (info) {
                params = paramsFunc(info);
                if (!params) {
                    throw new Error('INVALID_PARAM');
                }
                return _this2.mainStation._sendCommand(_constants.proto.cmd.SET_SYS_VAL, params, 1);
            }).then(function (d) {
                var data = d[0];
                data.splice(0, 2);
                if (data[0] !== params[0]) {
                    throw new Error('SET_CODE_RESP_ERR');
                }
                return _this2.readInfo(true);
            }).then(function (info) {
                return info[property];
            });
        }

        // TODO: program (0x70)

    }, {
        key: 'code',
        value: function code(newCode) {
            return this.info('code', function (info) {
                return [0x72, newCode & 0xFF, ((newCode & 0x0300) >> 2) + (info._raw[0x73] & 0x3F)];
            }, newCode);
        }
    }, {
        key: 'mode',
        value: function mode(newMode) {
            return this.info('mode', function (_info) {
                var modeLookup = SiStation.modeLookup();
                var newModeVal = newMode.hasOwnProperty('val') ? newMode.val : newMode;
                if (modeLookup[newModeVal] === undefined) {
                    return false;
                }
                return [0x71, newModeVal];
            }, newMode);
        }
    }, {
        key: 'beeps',
        value: function beeps(newBeeps) {
            return this.info('beeps', function (info) {
                return [0x73, (newBeeps ? 0x04 : 0x00) + (info._raw[0x73] & 0xFB)];
            }, newBeeps);
        }
    }, {
        key: 'flashes',
        value: function flashes(newFlashes) {
            return this.info('flashes', function (info) {
                return [0x73, (newFlashes ? 0x01 : 0x00) + (info._raw[0x73] & 0xFE)];
            }, newFlashes);
        }
    }, {
        key: 'autoSend',
        value: function autoSend(newAutoSend) {
            return this.info('autoSend', function (info) {
                return [0x74, (newAutoSend ? 0x02 : 0x00) + (info._raw[0x74] & 0xFD)];
            }, newAutoSend);
        }
    }, {
        key: 'extendedProtocol',
        value: function extendedProtocol(newExtendedProtocol) {
            return this.info('extendedProtocol', function (info) {
                return [0x74, (newExtendedProtocol ? 0x01 : 0x00) + (info._raw[0x74] & 0xFE)];
            }, newExtendedProtocol);
        }
    }, {
        key: 'serialNumber',
        value: function serialNumber() {
            return this.info('serialNumber', function () {
                return false;
            }, undefined);
        }
    }, {
        key: 'firmwareVersion',
        value: function firmwareVersion() {
            return this.info('firmwareVersion', function () {
                return false;
            }, undefined);
        }
    }, {
        key: 'buildDate',
        value: function buildDate() {
            return this.info('buildDate', function () {
                return false;
            }, undefined);
        }
    }, {
        key: 'deviceModel',
        value: function deviceModel() {
            return this.info('deviceModel', function () {
                return false;
            }, undefined);
        }
    }, {
        key: 'memorySize',
        value: function memorySize() {
            return this.info('memorySize', function () {
                return false;
            }, undefined);
        }
    }, {
        key: 'batteryDate',
        value: function batteryDate() {
            return this.info('batteryDate', function () {
                return false;
            }, undefined);
        }
    }, {
        key: 'batteryCapacity',
        value: function batteryCapacity() {
            return this.info('batteryCapacity', function () {
                return false;
            }, undefined);
        }
    }, {
        key: 'backupPointer',
        value: function backupPointer() {
            return this.info('backupPointer', function () {
                return false;
            }, undefined);
        }
    }, {
        key: 'siCard6Mode',
        value: function siCard6Mode() {
            return this.info('siCard6Mode', function () {
                return false;
            }, undefined);
        }
    }, {
        key: 'memoryOverflow',
        value: function memoryOverflow() {
            return this.info('memoryOverflow', function () {
                return false;
            }, undefined);
        }
    }, {
        key: 'lastWriteDate',
        value: function lastWriteDate() {
            return this.info('lastWriteDate', function () {
                return false;
            }, undefined);
        }
    }, {
        key: 'autoOffTimeout',
        value: function autoOffTimeout() {
            return this.info('autoOffTimeout', function () {
                return false;
            }, undefined);
        }
    }], [{
        key: 'modeLookup',
        value: function modeLookup() {
            if (SiStation._modeLookup) {
                return SiStation._modeLookup;
            }
            SiStation._modeLookup = {};
            Object.keys(SiStation.Mode).map(function (k) {
                SiStation._modeLookup[SiStation.Mode[k].val] = k;
            });
            return SiStation._modeLookup;
        }
    }, {
        key: 'typeLookup',
        value: function typeLookup() {
            if (SiStation._typeLookup) {
                return SiStation._typeLookup;
            }
            SiStation._typeLookup = {};
            Object.keys(SiStation.Type).map(function (k) {
                SiStation._typeLookup[SiStation.Type[k].val] = k;
            });
            return SiStation._typeLookup;
        }
    }, {
        key: 'modelLookup',
        value: function modelLookup() {
            if (SiStation._modelLookup) {
                return SiStation._modelLookup;
            }
            SiStation._modelLookup = {};
            Object.keys(SiStation.Model).map(function (k) {
                SiStation.Model[k].vals.map(function (val) {
                    SiStation._modelLookup[val] = k;
                });
            });
            return SiStation._modelLookup;
        }
    }]);

    return SiStation;
}();

SiStation.Mode = {
    SIACSpecialFunction1: { val: 0x01 },
    Control: { val: 0x02 },
    Start: { val: 0x03 },
    Finish: { val: 0x04 },
    Readout: { val: 0x05 },
    Clear: { val: 0x07 },
    Check: { val: 0x0A },
    Print: { val: 0x0B },
    StartWithTimeTrigger: { val: 0x0C },
    FinishWithTimeTrigger: { val: 0x0D },
    BCControl: { val: 0x12 },
    BCStart: { val: 0x13 },
    BCFinish: { val: 0x14 },
    BCSlave: { val: 0x1F }
};

SiStation.Type = { // TODO: meaningful val-s
    Main: { val: 0x00 },
    Sprint: { val: 0x01 },
    Print: { val: 0x02 },
    Field: { val: 0x03 },
    Master: { val: 0x04 }
};

SiStation.Model = {
    BSF3: { vals: [0x8003], description: 'BSF3', type: SiStation.Type.Field, series: 3 },
    BSF4: { vals: [0x8004], description: 'BSF4', type: SiStation.Type.Field, series: 4 },
    BSF5: { vals: [0x8115], description: 'BSF5', type: SiStation.Type.Field, series: 5 },
    BSF6: { vals: [0x8146], description: 'BSF6', type: SiStation.Type.Field, series: 6 },
    BSF7: { vals: [0x8117, 0x8197], description: 'BSF7', type: SiStation.Type.Field, series: 7 },
    BSF8: { vals: [0x8118, 0x8198], description: 'BSF8', type: SiStation.Type.Field, series: 8 },
    BS7Master: { vals: [0x8187], description: 'BS7-Master', type: SiStation.Type.Master, series: 7 },
    BS8Master: { vals: [0x8188], description: 'BS8-Master', type: SiStation.Type.Master, series: 8 },
    BSM4: { vals: [0x8084], description: 'BSM4', type: SiStation.Type.Main, series: 4 },
    BSM6: { vals: [0x8086], description: 'BSM6', type: SiStation.Type.Main, series: 6 },
    BSM7: { vals: [0x9197], description: 'BSM7', type: SiStation.Type.Main, series: 7 },
    BSM8: { vals: [0x9198], description: 'BSM8', type: SiStation.Type.Main, series: 8 },
    BS7S: { vals: [0x9597], description: 'BS7-S', type: SiStation.Type.Sprint, series: 7 },
    BS7P: { vals: [0xB197], description: 'BS7-P', type: SiStation.Type.Print, series: 7 },
    BS7GSM: { vals: [0xB897], description: 'BS7-GSM', type: SiStation.Type.Field, series: 7 },
    BS8P: { vals: [0xB198], description: 'BS8-P', type: SiStation.Type.Print, series: 8 }
};

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var proto = exports.proto = {
    // Protocol characters
    STX: 0x02,
    ETX: 0x03,
    ACK: 0x06, // when sent to BSx3..6, causes beep until SI-card taken out
    NAK: 0x15,
    DLE: 0x10,
    WAKEUP: 0xFF,

    // Basic protocol commands, currently unused
    basicCmd: {
        SET_CARDNO: 0x30,
        GET_SI5: 0x31, // read out SI-card 5 data
        SI5_WRITE: 0x43, // 02 43 (block: 0x30 to 0x37) (16 bytes) 03
        SI5_DET: 0x46, // SI-card 5 inserted (46 49) or removed (46 4F)
        TRANS_REC: 0x53, // autosend timestamp (online control)
        TRANS_TIME: 0x54, // autosend timestamp (lightbeam trigger)
        GET_SI6: 0x61, // read out SI-card 6 data
        SI6_DET: 0x66, // SI-card 6 inserted
        SET_MS: 0x70, // \x4D="M"aster, \x53="S"lave
        GET_MS: 0x71,
        SET_SYS_VAL: 0x72,
        GET_SYS_VAL: 0x73,
        GET_BDATA: 0x74, // Note: response carries '\xC4'!
        ERASE_BDATA: 0x75,
        SET_TIME: 0x76,
        GET_TIME: 0x77,
        OFF: 0x78,
        GET_BDATA2: 0x7A, // Note: response carries '\xCA'!
        SET_BAUD: 0x7E // 0=4800 baud, 1=38400 baud
    },
    basicCmdLookup: function basicCmdLookup() {
        if (proto._basicCmdLookup) {
            return proto._basicCmdLookup;
        }
        proto._basicCmdLookup = {};
        Object.keys(proto.basicCmd).map(function (k) {
            proto._basicCmdLookup[proto.basicCmd[k]] = k;
        });
        return proto._basicCmdLookup;
    },

    // Extended protocol commands
    cmd: {
        GET_BACKUP: 0x81,
        SET_SYS_VAL: 0x82,
        GET_SYS_VAL: 0x83,
        SRR_WRITE: 0xA2, // ShortRangeRadio - SysData write
        SRR_READ: 0xA3, // ShortRangeRadio - SysData read
        SRR_QUERY: 0xA6, // ShortRangeRadio - network device query
        SRR_PING: 0xA7, // ShortRangeRadio - heartbeat from linked devices, every 50 seconds
        SRR_ADHOC: 0xA8, // ShortRangeRadio - ad-hoc message, f.ex. from SI-ActiveCard
        GET_SI5: 0xB1, // read out SI-card 5 data
        TRANS_REC: 0xD3, // autosend timestamp (online control)
        CLEAR_CARD: 0xE0, // found on SI-dev-forum: 02 E0 00 E0 00 03 (http://www.sportident.com/en/forum/8/56#59)
        GET_SI6: 0xE1, // read out SI-card 6 data block
        SET_SI6: 0xE2, // write SI-card 6 line (16 bytes)
        SET_SI6_SPECIAL: 0xE4, // write SI-card 6 special fields (e.g. start number)
        SI5_DET: 0xE5, // SI-card 5 inserted
        SI6_DET: 0xE6, // SI-card 6 inserted
        SI_REM: 0xE7, // SI-card removed
        SI8_DET: 0xE8, // SI-card 8/9/10/11/p/t inserted
        SET_SI8: 0xEA, // write SI-card 8/9/10/11/p/t data word
        GET_SI8: 0xEF, // read out SI-card 8/9/10/11/p/t data block
        SET_MS: 0xF0, // \x4D="M"aster, \x53="S"lave
        GET_MS: 0xF1,
        ERASE_BDATA: 0xF5,
        SET_TIME: 0xF6,
        GET_TIME: 0xF7,
        OFF: 0xF8,
        SIGNAL: 0xF9, // 02 F9 (number of signals) (CRC16) 03
        SET_BAUD: 0xFE // \x00=4800 baud, \x01=38400 baud
    },
    cmdLookup: function cmdLookup() {
        if (proto._cmdLookup) {
            return proto._cmdLookup;
        }
        proto._cmdLookup = {};
        Object.keys(proto.cmd).map(function (k) {
            proto._cmdLookup[proto.cmd[k]] = k;
        });
        return proto._cmdLookup;
    },

    // Protocol Parameters
    P_MS_DIRECT: 0x4D, // "M"aster
    P_MS_INDIRECT: 0x53, // "S"lave
    P_SI6_CB: 0x08,

    // offsets in system data
    // currently only O_MODE, O_STATION_CODE and O_PROTO are used
    sysDataOffset: {
        OLD_SERIAL: 0x00, // 2 bytes - only up to BSx6, numbers < 65.536
        OLD_CPU_ID: 0x02, // 2 bytes - only up to BSx6, numbers < 65.536
        SERIAL_NO: 0x00, // 4 bytes - only after BSx7, numbers > 70.000 (if byte 0x00 > 0, better use OLD offsets)
        FIRMWARE: 0x05, // 3 bytes
        BUILD_DATE: 0x08, // 3 bytes - YYMMDD
        MODEL_ID: 0x0B, // 2 bytes:
        //   8003: BSF3 (serial numbers > 1.000)
        //   8004: BSF4 (serial numbers > 10.000)
        //   8084: BSM4-RS232
        //   8086: BSM6-RS232 / BSM6-USB
        //   8146: BSF6 (serial numbers > 30.000)
        //   8115: BSF5 (serial numbers > 50.000)
        //   8117 / 8118: BSF7 / BSF8 (serial no. 70.000...70.521, 72.002...72.009)
        //   8187 / 8188: BS7-SI-Master / BS8-SI-Master
        //   8197: BSF7 (serial numbers > 71.000, apart from 72.002...72.009)
        //   8198: BSF8 (serial numbers > 80.000)
        //   9197 / 9198: BSM7-RS232, BSM7-USB / BSM8-USB, BSM8-SRR
        //   9199: unknown
        //   9597: BS7-S
        //   B197 / B198: BS7-P / BS8-P
        //   B897: BS7-GSM
        MEM_SIZE: 0x0D, // 1 byte - in KB
        REFRESH_RATE: 0x10, // 1 byte - in 3/sec
        POWER_MODE: 0x11, // 1 byte - 06 low power, 08 standard/sprint

        BAT_DATE: 0x15, // 3 bytes - YYMMDD
        BAT_CAP: 0x19, // 2 bytes - battery capacity in mAh (as multiples of 14.0625?!)
        BACKUP_PTR: 0x1C, // 4 bytes - at positions 1C,1D,21,22
        SI6_CB: 0x33, // 1 byte - bitfield defining which SI Card 6 blocks to read: \x00=\xC1=read block0,6,7; \x08=\xFF=read all 8 blocks
        BAT_STATE: 0x34, // 4 bytes - for battery state: 2000mAh: 000000=0%, 6E0000=100%, 1000mAh:000000=0%, 370000=100%
        MEM_OVERFLOW: 0x3D, // 1 byte - memory overflow if != 0x00

        INTERVAL: 0x48, // 2 bytes - in 32*ms
        WTF: 0x4A, // 2 bytes - in 32*ms

        PROGRAM: 0x70, // 1 byte - station program: xx0xxxxxb competition, xx1xxxxxb training
        MODE: 0x71, // 1 byte - see SI station modes below
        STATION_CODE: 0x72, // 1 byte
        PROTO: 0x74, // 1 byte - protocol configuration, bit mask value:
        //   xxxxxxx1b extended protocol
        //   xxxxxx1xb auto send out
        //   xxxxx1xxb handshake (only valid for card readout)
        //   xxxx1xxxb sprint 4ms (only for Start&Finish modes)
        //   xxx1xxxxb access with password only
        //   xx1xxxxxb stop, if backup is full (only for Readout mode)
        //   1xxxxxxxb read out SI-card after punch (only for punch modes;
        //             depends on bit 2: auto send out or handshake)
        LAST_WRITE_DATE: 0x75, // 3 bytes - YYMMDD
        LAST_WRITE_TIME: 0x78, // 3 bytes - 1 byte day (see below), 2 bytes seconds after midnight/midday
        SLEEP_TIME: 0x7B, // 3 bytes - 1 byte day (see below), 2 bytes seconds after midnight/midday
        //   xxxxxxx0b - seconds relative to midnight/midday: 0 = am, 1 = pm
        //   xxxx000xb - day of week: 000 = Sunday, 110 = Saturday
        //   xx00xxxxb - week counter 0..3, relative to programming date
        WORKING_TIME: 0x7E // 2 bytes - big endian number = minutes
    },

    // SI station modes
    M_CONTROL: 0x02,
    M_START: 0x03,
    M_FINISH: 0x04,
    M_READ_SICARDS: 0x05,
    M_CLEAR: 0x07,
    M_CHECK: 0x0A,
    M_PRINTOUT: 0x0B,

    // Weekday encoding (only for reference, currently unused)
    D_SUNDAY: 0,
    D_MONDAY: 1,
    D_TUESDAY: 2,
    D_WEDNESDAY: 3,
    D_THURSDAY: 4,
    D_FRIDAY: 5,
    D_SATURDAY: 6,

    // Backup memory record length
    REC_LEN: 8, // Only in extended protocol, otherwise 6!

    // punch trigger in control mode data structure
    T_OFFSET: 8,
    T_CN: 0,
    T_TIME: 5,

    // backup memory in control mode
    BC_CN: 3,
    BC_TIME: 8
};

/***/ }),

/***/ "./src/drivers/BaseDriver.js":
/*!***********************************!*\
  !*** ./src/drivers/BaseDriver.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseDriver = exports.BaseDriver = function () {
    function BaseDriver() {
        _classCallCheck(this, BaseDriver);
    }

    _createClass(BaseDriver, [{
        key: 'new',
        value: function _new(_MainStation) {
            throw new Error('Driver must implement "new" method');
        }
    }, {
        key: 'detect',
        value: function detect(_MainStation) {
            throw new Error('Driver must implement "detect" method');
        }
    }, {
        key: 'open',
        value: function open(_mainStation) {
            throw new Error('Driver must implement "open" method');
        }
    }, {
        key: 'close',
        value: function close(_mainStation) {
            throw new Error('Driver must implement "close" method');
        }
    }, {
        key: 'send',
        value: function send(_mainStation, _buffer) {
            throw new Error('Driver must implement "send" method');
        }
    }, {
        key: 'name',
        get: function get() {
            throw new Error('Driver must implement name getter');
        }
    }]);

    return BaseDriver;
}();

/***/ }),

/***/ "./src/drivers/WebUsb.js":
/*!*******************************!*\
  !*** ./src/drivers/WebUsb.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WebUsb = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseDriver2 = __webpack_require__(/*! ./BaseDriver */ "./src/drivers/BaseDriver.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var siConfiguration = 1;
var siInterface = 0;
var siAlternate = 0;
var siEndpoint = 1;
var siPacketSize = 64;
var siDeviceFilters = [{ vendorId: 0x10c4, productId: 0x800a }];

var WebUsb = exports.WebUsb = function (_BaseDriver) {
    _inherits(WebUsb, _BaseDriver);

    function WebUsb() {
        _classCallCheck(this, WebUsb);

        return _possibleConstructorReturn(this, (WebUsb.__proto__ || Object.getPrototypeOf(WebUsb)).apply(this, arguments));
    }

    _createClass(WebUsb, [{
        key: 'new',
        value: function _new(MainStation) {
            var _this2 = this;

            if (!('usb' in navigator)) {
                return;
            }
            navigator.usb.requestDevice({
                filters: siDeviceFilters
            }).then(function (selectedDevice) {
                if (!('USB-' + selectedDevice.serialNumber in MainStation.allByDevice)) {
                    new MainStation({
                        ident: 'USB-' + selectedDevice.serialNumber,
                        name: selectedDevice.productName,
                        driver: _this2,
                        _device: selectedDevice
                    });
                }
            });
        }
    }, {
        key: 'detect',
        value: function detect(MainStation) {
            var _this3 = this;

            if (!('usb' in navigator)) {
                return;
            }
            navigator.usb.getDevices().then(function (devices) {
                devices.map(function (device) {
                    var matchesSiDeviceFilter = siDeviceFilters.findIndex(function (filter) {
                        return device.vendorId === filter.vendorId && device.productId === filter.productId;
                    }) !== -1;
                    if (matchesSiDeviceFilter) {
                        if (!('USB-' + device.serialNumber in MainStation.allByDevice)) {
                            new MainStation({
                                ident: 'USB-' + device.serialNumber,
                                name: device.productName,
                                driver: _this3,
                                _device: device
                            });
                        }
                    }
                });
            });
        }
    }, {
        key: 'open',
        value: function open(mainStation) {
            return new Promise(function (resolve, _reject) {
                var dev = mainStation.device._device;

                mainStation.device._receiveLoop = function () {
                    dev.transferIn(siEndpoint, siPacketSize).then(function (response) {
                        mainStation.device._receiveLoop();
                        var bufView = new Uint8Array(response.data.buffer);
                        mainStation._logReceive(bufView);
                        for (var i = 0; i < bufView.length; i++) {
                            mainStation._respBuffer.push(bufView[i]);
                        }
                        mainStation._processReceiveBuffer();
                    }).catch(function (err) {
                        console.warn(err);
                        mainStation._remove();
                    });
                };

                console.debug('Opening...', mainStation.device);
                dev.open().then(function () {
                    console.debug('Resetting...', dev);
                    return dev.reset();
                }).then(function () {
                    console.debug('Selecting Configuration...', dev);
                    return dev.selectConfiguration(siConfiguration);
                }).then(function () {
                    console.debug('Claiming Interface...', dev);
                    return dev.claimInterface(siInterface);
                }).then(function () {
                    console.debug('Selection Alternate Interface...', dev);
                    return dev.selectAlternateInterface(siInterface, siAlternate);
                }).then(function () {
                    console.debug('Enabling Serial...');
                    return dev.controlTransferOut({
                        requestType: 'vendor',
                        recipient: 'interface',
                        request: 0x00,
                        value: 0x01,
                        index: siInterface
                    });
                }).then(function () {
                    console.debug('Setting Baudrate...');
                    return dev.controlTransferOut({
                        requestType: 'vendor',
                        recipient: 'interface',
                        request: 0x1E,
                        value: 0x00,
                        index: siInterface
                    }, new Uint8Array([0x00, 0x96, 0x00, 0x00]).buffer);
                }).then(function () {
                    console.debug('Starting Receive Loop...');
                    mainStation.device._receiveLoop();
                    resolve();
                });
            });
        }
    }, {
        key: 'close',
        value: function close(mainStation) {
            return new Promise(function (resolve, _reject) {
                var dev = mainStation.device._device;
                console.debug('Disabling Serial...');
                dev.controlTransferOut({
                    requestType: 'vendor',
                    recipient: 'interface',
                    request: 0x00,
                    value: 0x00,
                    index: siInterface
                }).then(function () {
                    console.debug('Releasing Interface...');
                    return dev.releaseInterface(siInterface);
                }).then(function () {
                    console.debug('Closing Device...');
                    return dev.close();
                }).then(function () {
                    resolve();
                });
            });
        }
    }, {
        key: 'send',
        value: function send(mainStation, buffer) {
            var dev = mainStation.device._device;
            return dev.transferOut(siEndpoint, buffer);
        }
    }, {
        key: 'name',
        get: function get() {
            return 'WebUSB';
        }
    }]);

    return WebUsb;
}(_BaseDriver2.BaseDriver);

exports.default = WebUsb;

/***/ }),

/***/ "./src/drivers/index.js":
/*!******************************!*\
  !*** ./src/drivers/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WebUsb = __webpack_require__(/*! ./WebUsb */ "./src/drivers/WebUsb.js");

Object.defineProperty(exports, 'WebUsb', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_WebUsb).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.si = undefined;

var _constants = __webpack_require__(/*! ./constants */ "./src/constants.js");

var constants = _interopRequireWildcard(_constants);

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var utils = _interopRequireWildcard(_utils);

var _SiCard = __webpack_require__(/*! ./SiCard */ "./src/SiCard.js");

var _SiStation = __webpack_require__(/*! ./SiStation */ "./src/SiStation.js");

var _SiMainStation = __webpack_require__(/*! ./SiMainStation */ "./src/SiMainStation.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var si = exports.si = {
    constants: constants,
    utils: utils,
    Station: _SiStation.SiStation,
    MainStation: _SiMainStation.SiMainStation,
    Card: _SiCard.SiCard,
    onLoad: function onLoad() {
        return undefined;
    }
}; /* global si */
/* exported si */

window.addEventListener('load', function () {
    _SiMainStation.SiMainStation.startDeviceDetection();
    if (si.onLoad) {
        si.onLoad();
    }
}, true);

exports.default = si;


window.si = si;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timeoutRejectPromise = exports.timeoutResolvePromise = exports.processSiProto = exports.CRC16 = exports.prettyHex = exports.arr2cardNumber = exports.arr2date = exports.arr2time = exports.arr2big = exports.isByte = undefined;

var _constants = __webpack_require__(/*! ./constants */ "./src/constants.js");

var isByte = exports.isByte = function isByte(byte) {
    return Number(byte) === byte && Math.floor(byte) === byte && byte < 0x100;
};

var arr2big = exports.arr2big = function arr2big(arr) {
    var outnum = 0;
    for (var i = 0; i < arr.length; i++) {
        var byte = arr[i];
        if (!isByte(byte)) {
            throw new Error('Array elements need to be bytes');
        }
        outnum += byte * Math.pow(0x100, arr.length - i - 1);
    }
    return outnum;
};

var arr2time = exports.arr2time = function arr2time(arr) {
    if (arr.length !== 2) {
        throw new Error('arr2time: length must be 2, but is ' + arr.length);
    }
    if (arr[0] === 0xEE && arr[1] === 0xEE) {
        return null;
    }
    return arr2big(arr);
};

var arr2date = exports.arr2date = function arr2date(arr) {
    if (arr.length === 7 || arr.length === 6) {
        var secs = arr2big(arr.slice(4, 6));
        return new Date(Date.UTC(arr[0] + 2000, arr[1] - 1, arr[2], (arr[3] & 0x01) * 12 + Math.floor(secs / 3600), Math.floor(secs % 3600 / 60), secs % 60, arr.length === 7 ? arr[6] * 1000 / 256 : 0));
    } else if (arr.length === 3) {
        return new Date(Date.UTC(2000 + arr[0], arr[1] - 1, arr[2]));
    }
    throw new Error('arr2date: length must be 3, 6 or 7, but is ' + arr.length);
};

var arr2cardNumber = exports.arr2cardNumber = function arr2cardNumber(arr) {
    if (arr.length === 4 || arr.length === 3) {
        var cardnum = arr[1] << 8 | arr[0];
        var fourthSet = arr.length === 4 && arr[3] !== 0x00;
        if (!fourthSet && 1 < arr[2] && arr[2] <= 4) {
            cardnum += arr[2] * 100000;
        } else if (fourthSet || 4 < arr[2]) {
            cardnum += arr[2] << 16;
        }
        if (arr.length === 4) {
            cardnum |= arr[3] << 24;
        }
        return cardnum;
    }
    throw new Error('arr2cardNumber: length must be 3 or 4, but is ' + arr.length);
};

var prettyHex = exports.prettyHex = function prettyHex(input) {
    if (typeof input === 'string') {
        var out = [];
        var i = void 0;
        for (i = 0; i < input.length; i++) {
            out.push(('00' + input.charCodeAt(i).toString(16)).slice(-2));
        }
        return out.join(' ').toUpperCase();
    }
    var convertToArray = function convertToArray(iterable) {
        return [].slice.call(iterable);
    };
    return convertToArray(input).map(function (byte) {
        return '00' + byte.toString(16);
    }).map(function (paddedStr) {
        return paddedStr.slice(-2);
    }).join(' ').toUpperCase();
};

var CRC16 = exports.CRC16 = function CRC16(str) {
    var CRC_POLYNOM = 0x8005;
    var CRC_BITF = 0x8000;
    if (str.length < 3) {
        return [1 <= str.length ? str[0] : 0x00, 2 <= str.length ? str[1] : 0x00];
    }
    var s = str.length % 2 === 0 ? str.concat([0x00, 0x00]) : str.concat([0x00]);
    var crc = s[0] * 0x100 + s[1];
    for (var i = 2; i < s.length; i += 2) {
        var c = s.slice(i, i + 2);
        var val = c[0] * 0x100 + c[1];
        for (var j = 0; j < 16; j++) {
            if ((crc & CRC_BITF) !== 0) {
                crc = crc << 1;
                if ((val & CRC_BITF) !== 0) {
                    crc += 1;
                }
                crc = crc ^ CRC_POLYNOM;
            } else {
                crc = crc << 1;
                if ((val & CRC_BITF) !== 0) {
                    crc += 1;
                }
            }
            val = val << 1;
        }
        crc = crc & 0xFFFF;
    }
    return [crc >> 8, crc & 0xFF];
};

var processSiProto = exports.processSiProto = function processSiProto(inputData) {
    var command = void 0,
        parameters = void 0;
    while (command === undefined) {
        if (inputData.length === 0) {
            return null;
        }
        if (inputData[0] === _constants.proto.ACK) {
            inputData.splice(0, 1);
            continue; // eslint-disable-line no-continue
        }
        if (inputData[0] === _constants.proto.NAK) {
            inputData.splice(0, 1);
            return {
                mode: _constants.proto.NAK,
                command: null,
                parameters: []
            };
        }
        if (inputData[0] === _constants.proto.WAKEUP) {
            inputData.splice(0, 1);
            continue; // eslint-disable-line no-continue
        }
        if (inputData[0] !== _constants.proto.STX) {
            console.warn('Invalid start byte: ' + prettyHex([inputData[0]]));
            inputData.splice(0, 1);
            continue; // eslint-disable-line no-continue
        }
        if (inputData.length < 6) {
            return null;
        }
        command = inputData[1];
        var len = inputData[2];
        if (inputData.length < 6 + len) {
            return null;
        }
        if (inputData[5 + len] !== _constants.proto.ETX) {
            console.warn('Invalid end byte: ' + prettyHex([inputData[5 + len]]));
            inputData.splice(0, 1);
            continue; // eslint-disable-line no-continue
        }
        parameters = inputData.slice(3, 3 + len);
        var crcContent = CRC16(inputData.slice(1, 3 + len));
        var crc = inputData.slice(3 + len, 5 + len);
        inputData.splice(0, 6 + len);
        if (crc[0] !== crcContent[0] || crc[1] !== crcContent[1]) {
            console.debug('Invalid Command received.\n    CMD:0x' + prettyHex([command]) + '\n    LEN:' + len + '\n    PARAMS:' + prettyHex(parameters) + '\n    CRC:' + prettyHex(crc) + '\n    Content-CRC:' + prettyHex(crcContent));
            continue; // eslint-disable-line no-continue
        }
    }
    return {
        mode: _constants.proto.STX,
        command: command,
        parameters: parameters
    };
};

var timeoutResolvePromise = exports.timeoutResolvePromise = function timeoutResolvePromise(value) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new Promise(function (resolve, _reject) {
        return setTimeout(function () {
            return resolve(value);
        }, timeout);
    });
};

var timeoutRejectPromise = exports.timeoutRejectPromise = function timeoutRejectPromise(reason, timeout) {
    return new Promise(function (resolve, _reject) {
        return setTimeout(function () {
            return resolve(reason);
        }, timeout);
    });
};

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map