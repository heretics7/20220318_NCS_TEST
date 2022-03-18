var express = require('express')
var app = express();

var getsend = require('./routes/getsend')
var postsend = require('./routes/postsend')
var sqlsend = require('./routes/sqlsend')

app.use('/get', getsend)
app.use('/post', postsend)
app.use('/sql', sqlsend)

app.set('port', 8080)
app.get('/', (req, res) => {
    res.send('node setting')
})
app.listen(app.get('port'), () => {
    console.log('node link success')
})