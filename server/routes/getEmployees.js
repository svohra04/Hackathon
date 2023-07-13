const express = require('express')
const router = express.Router()
// let Employees = require('../schemas/Employees')


router.get('/', async(req, res)=>{
    try{
        // const response = await Employees.find()
        // res.json(response)
        res.json({"Test":"Test"})
    }
    catch(err){
        res.status(500).send(`Error getting employee: ${err.message}`);
    }

})
module.exports = router;