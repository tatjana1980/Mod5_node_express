const express = require('express');
const app = express();
const wokersJson = require('./data.json');

// для вывода из массива
const wokers = [
    {id: 1, name: "Bill", age: 45},
    {id: 2, name: "Tom", age: 34},
    {id: 3, name: "Sam", age: 23},
    {id: 3, name: "Phil", age: 38}
];

app.get('/wokers', function (req, res) {
    res.send(wokers);
});

// для вывода через json
app.get('/wokers/json', function (req, res) {
    res.send(wokersJson);
});

app.listen(3000, function () {
    console.log('Example app listenning on port 3000!');
})