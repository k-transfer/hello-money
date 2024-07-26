const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = 'Love.Money.Dreams.Big.Goals.Family';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('index', {app: null, error: null});
})

app.post('/', function(req, res) {
    let url = 'http://api.skrillaxchange.com/data/2.5/app?q=${input}&units=metric&appid=${apiKey}'
    console.log(req.body.)
})