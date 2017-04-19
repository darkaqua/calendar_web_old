/**
 * Created by Pablo on 18/02/2017.
 */
module.exports = {
    defaultLayout: 'main',

    helpers: {
        web_name: () => { return global.config.web.name; }
    }
};