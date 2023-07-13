const express = require('express')
const router = express.Router()
let Employees = require('../schemas/Employees')


router.post('/', async(req, res)=>{

    const validSearchParams = new Set(["Name","EmployeeNumber"])

    try{
        const searchParams = req.body;

        for (let field in searchParams) {
            if (!validSearchParams.has(field)) {
                return res.status(400).send(`Invalid Search Body, Available Fields to Search on: [${Array.from(validSearchParams).join(", ")}]`);
            }
        }
        const response = await Employees.find(searchParams)
        res.json(response)
    }
    catch(err){
        return res.status(err.status || 500).send(`Error getting employee: ${err.message}`);
    }

})
module.exports = router;