"use strict";
exports.__esModule = true;
var yargs_1 = require("yargs");
var helpers_1 = require("yargs/helpers");
function commands() {
    var argv = (0, yargs_1["default"])((0, helpers_1.hideBin)(process.argv))
        .options({
        prompt: {
            alias: 'p',
            describe: 'prompt',
            type: 'boolean'
        }
    })
        .help()
        .alias('h', 'help')
        .version()
        .alias('v', 'version').argv;
    return argv;
}
exports["default"] = commands;
