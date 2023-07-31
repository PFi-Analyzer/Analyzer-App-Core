const express = require('express');
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// test connection
app.get('/test-connection', (req, res, next) => {
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Can not connect to the DB" + err);
            res.send("Can not connect to the DB");

        }
        else {
            console.log("connected to the DB");
            res.send("connected to the DB");
        }
    })
});

app.listen(4000, function () {
    console.log('Server is running on port 4000');
});
