"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONFIG = new Map();
CONFIG.set("port", 3000);
CONFIG.set("staticDIR", _path2.default.join(__dirname, "..", "public"));
CONFIG.set("viewsDIR", _path2.default.join(__dirname, "..", "views"));
exports.default = CONFIG;