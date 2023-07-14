const express = require('express')
const router = express.Router()
const { PythonShell } = require('python-shell');


router.post('/predict-salary', async (req, res) => {

  let role = req.body["JobRole"]
  let location = req.body["WorkLocation"]

  console.log(role,location)
  
  try {
        let options = {
            mode: 'text',
            pythonOptions: ['-u'], // get print results in real-time
            args: [role, location]
          };
          
          PythonShell.run('predict_salary.py', options).then(messages=>{
            // results is an array consisting of messages collected during execution
            let prediction = messages;
            console.log("Prediction in express",prediction)
          });
          res.status(200).send("Done")
    }
    catch (err) {
        console.error(err);
        res.status(500).send(`Error predicting salary: ${err.message}`);
    }

})
module.exports = router;