const express = require('express')
const router = express.Router()
const { PythonShell } = require('python-shell');


router.post('/predict-salary', async (req, res) => {
    try {
        let options = {
            mode: 'text',
            pythonOptions: ['-u'], // get print results in real-time
            args: ['value1', 'value2', 'value3']
          };
          
          PythonShell.run('predict_salary.py', options).then(messages=>{
            // results is an array consisting of messages collected during execution
            console.log('results: %j', messages);
          });
          res.status(200).send("Done")
    }
    catch (err) {
        console.error(err);
        res.status(500).send(`Error predicting salary: ${err.message}`);
    }

})
module.exports = router;