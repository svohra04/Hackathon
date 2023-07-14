const express = require('express')
const router = express.Router()
const { PythonShell } = require('python-shell');


router.post('/predict-salary', async (req, res) => {

  let role = req.body["JobRole"]
  let location = req.body["WorkLocation"]

  try {
        let options = {
            mode: 'text',
            pythonOptions: ['-u'],
            args: [role, location]
          };
          
          PythonShell.run('predict_salary.py', options).then(messages=>{
            let prediction = messages[0];
            let responseBody = {
              "salaryPrediction": prediction
            }
            res.status(200).send(responseBody)
          });
    }
    catch (err) {
        console.error(err);
        res.status(500).send(`Error predicting salary: ${err.message}`);
    }

})
module.exports = router;