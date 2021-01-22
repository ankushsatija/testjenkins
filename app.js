const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World this is my new app github trigger function everything working fine as expected!'))

var server = app.listen(3000, () => {
    console.log("Listening on port " + server.address().port + "...");
});
