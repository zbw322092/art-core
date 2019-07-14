"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_config_base_1 = require("./webpack.config.base");
const configRules_1 = require("./configRules");
const configPluginsSSR_1 = require("./configPluginsSSR");
class WebpackDevSSRConfig extends webpack_config_base_1.WebpackBaseConfig {
    constructor(entry, output) {
        super(entry, output);
        this.target = 'node';
        this.devtool = '#source-map';
        this.resolve = {
            modules: ['node_modules', '.'],
            extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
        };
        this.module = {
            rules: [configRules_1.jsRule, configRules_1.tsRule, configRules_1.nullRule, configRules_1.htmlRule, configRules_1.assetsRuleSSR()]
        };
        this.plugins = configPluginsSSR_1.getConfigPluginsSSR();
    }
}
exports.default = WebpackDevSSRConfig;
