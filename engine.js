/**
 * Created by Pablo on 18/02/2017.
 */
const main = require('./main');

module.exports = {
    defaultLayout: 'main',

    helpers: {
        web_name: () => { return main.config.web_name; }
    }
};