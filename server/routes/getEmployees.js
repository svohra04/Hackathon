const express = require('express')
const router = express.Router()
let Employees = require('../schemas/Employees')


router.post('/', async(req, res)=>{
    try{
        const searchParams = req.body;
        const response = await Employees.find(searchParams)
        res.json(response)
    }
    catch(err){
        res.status(500).send(`Error getting employee: ${err.message}`);
    }

})
module.exports = router;