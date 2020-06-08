const express = require('express')
const router = express.Router();

const {manage} = require('../models/manageDB');

    students = new manage()
    let list = students.get('students');

router.use(express.urlencoded({ extended:false }) )

router.get('/student',(req,res)=>{
    list = students.get('students');
    res.json(list);
})
.post('/student',(req,res)=>{
    console.log('this is the body');
    console.log(req.body)
    students.create('students',req.body);

    res.send('adding a new student');

})
.patch('/student/:id',(req,res)=>{
    console.log('this is the body');
    console.log(req.body)
    students.create('students',req.body);

    res.send('adding a new student');

})
.delete('/student/:id',(req,res)=>{
    
    let id = req.params.id;
    console.log(req.params)
    students.delete('students',id)
    res.send('deleted');
})

module.exports = router