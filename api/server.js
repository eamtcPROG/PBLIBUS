const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>IBUS api</h1>')
});

server.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        message: 'Something went wrong',
    });
});
module.exports = server;