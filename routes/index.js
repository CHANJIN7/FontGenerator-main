const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('INDEX PAGE');
    res.render('index');
});

router.get('/download', (req, res) => {
    res.download('public/uploads/Professor.ttf');
});


router.get('/templatedown', (req, res) => {
    res.download('C:/FontGenerator-main/public/template/template1.jpg');
    res.download('C:/FontGenerator-main/public/template/template2.jpg');
    res.download('C:/FontGenerator-main/public/template/template3.jpg');
});

module.exports = router;
