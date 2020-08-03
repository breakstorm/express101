var express = require('express');
var router = express.Router();

/* GET login render */
router.get('/', (req, res, next) => {
    // res.send('hello login')
    res.render('login')
})

router.post('/', (req, res, next) => {
    console.log('id', req.body.id);
    console.log('pw', req.body.pw);
    res.send(`id: ${req.body.id}, pw: ${req.body.pw}`)
})

module.exports = router;