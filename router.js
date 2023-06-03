const express = require('express');
const { addEmp, updateEmp, deleteEmpById, getAllEmp, getEmpById } = require('./empController');

const router = express.Router();

router.post('/employee', addEmp )
      .put('/employee', updateEmp)
      .get('/employee', getAllEmp)
      .get('/employee/:id', getEmpById)
      .delete('/employee/:id', deleteEmpById)

module.exports = router;
