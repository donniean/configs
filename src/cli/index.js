"use strict";
exports.__esModule = true;
var prettierConfig = require("@templates/prettier/prettier.config");
var logger_1 = require("@/utils/logger");
var paths_1 = require("@/utils/paths");
var commands_1 = require("./commands");
console.log(prettierConfig);
function cli() {
    var argv = (0, commands_1["default"])();
    logger_1["default"].log(argv);
    logger_1["default"].log(paths_1["default"]);
}
exports["default"] = cli;
