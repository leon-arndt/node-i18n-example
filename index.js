/**
 * This example is intended to show a basic plain vanilla setup and
 * also to be run as integration test for concurrency issues.
 *
 * Please remove setTimeout(), if you intend to use it as a blueprint!
 *
 */

// require modules
let http = require('http'),
    i18n = require('i18n'),
    app;

// minimal config
i18n.configure({
    locales: ['en', 'de'],
    directory: __dirname + '/locales'
});

// simple server
app = http.createServer(function (req, res) {

    // init & guess
    i18n.init(req, res);
    i18n.setLocale('de');

    let greeting = i18n.__('Hello');
    console.log(greeting);
});

// startup
app.listen(3000, '127.0.0.1');