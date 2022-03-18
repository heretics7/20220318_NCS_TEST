var express = require('express')
var app = express();

app.set('port', 8080)
app.get('/', (req, res) => {
    res.send('node setting')
})
app.listen(app.get('port'), () => {
    console.log('node link success')
})