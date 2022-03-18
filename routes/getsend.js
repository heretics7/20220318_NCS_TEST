var express = require('express');
var mysql = require('mysql');
var dbconfig = require('../db/config.js')
var router = express.Router();
var connection = mysql.createConnection(dbconfig)

router.get('/', (req, res) => {
    res.send('/get이라는 요청의 응답');
})
router.get('/getjson', (req, res) => {
    res.send({'url':'/get/getjson'});
})
router.post('/post', (req, res) => {
    res.send({
        'url':'/get/post',
        'title':'/getsend.js내의 post라우팅'
    });
})
router.get('/awssql', (req, res) => {
    connection.query('SELECT * FROM contact',(error, result) => {
            if(error) throw error;
            console.log('해당스키마안의 테이블 내용 : ', result)
            res.send(result)
        }
    )
})

module.exports = router;