const express = require('express')
const router = express.Router()

const {manage} = require('../models/manageDB');

    courses = new manage('courses')
    let list = courses.get('courses');

    router.use(express.urlencoded({ extended:false }) )

    router.get('/courses',(req,res)=>{
        list = courses.get('courses');
        res.json(list);
    })
    .post('/courses',(req,res)=>{
        console.log('this is the body');
        console.log(req.body)
        courses.create('courses',req.body);
    
        res.send('adding a new courses');
    
    })
    .patch('/courses/:id',(req,res)=>{
        console.log('this is the body');
        console.log(req.body)
        courses.create('courses',req.body);
    
        res.send('adding a new courses');
    
    })
    .delete('/courses/:id',(req,res)=>{
        
        let id = req.params.id;
        console.log(req.params)
        courses.delete('courses',id)
        res.send('deleted');
    })
    
module.exports = router