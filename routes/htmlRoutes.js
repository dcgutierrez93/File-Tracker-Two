// Dependencies
const path = require('path');

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/views/home.html"));
    });
    // Testing ==============================================================
    app.get('/test', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/test/test.html"));
    });
}
