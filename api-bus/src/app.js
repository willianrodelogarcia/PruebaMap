const express = require('express');

const app = express();


app.set('port',process.env.PORT || 1337);

app.use(express.json());


app.use(require('./routes/apiBus'));
/*app.get('/', function (req, res) {
    res.send('Hello World!');
});*/


app.listen(app.get('port'), ()=>{
    console.log('server on port ', app.get('port'));
});

module.exports = app;