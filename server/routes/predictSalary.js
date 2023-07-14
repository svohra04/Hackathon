const express = require('express')
const router = express.Router()
const { PythonShell } = require('python-shell');


// let Employees = require('../schemas/Employees')


router.post('/predict-salary', async (req, res) => {
    try {
        PythonShell.run('my_script.py', null).then(messages=>{
            console.log('finished');
          });
        res.status(200).send("Success")
        // const jobRole = await Employees.distinct("JobRole");
        // res.json(jobRole);
    }
    catch (err) {
        console.error(err);
        res.status(500).send(`Error predicting salary: ${err.message}`);
    }

})
module.exports = router;