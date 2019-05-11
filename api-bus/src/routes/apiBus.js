const express = require('express');
const router = express.Router();
const mysql = require('../database/configDB');



router.get('/',(req,res)=>{
    mysql.query("select * from rutas",(error,result,fields)=>{
        if (error) throw console.log(error);
        res.json(result);
    });
});


module.exports = router; 