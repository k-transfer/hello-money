const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const authRoutes = require('./routes/authRoutes');
const accountRoutes = require('./routes/accountRoutes');
const transactionRoutes = require('./routes/transactionRoutes';


)
const app = express()
app.use(bodyParser.json());

const apiKey = 'Love.Money.Dreams.Big.Goals.Family';

app.use('/api/auth', authRoutes);
app.use('/api/account', accountRoutes);
app.use('/api/transactions', transactionRoutes);

app.get('/', function (req, res) {
    res.render('index', {app: null, error: null});
})

app.post('/', function(req, res) {
    let url = 'http://api.skrillaxchange.com/data/2.5/app?q=${input}&units=metric&appid=${apiKey}'
    console.log(req.body.)
});


const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});