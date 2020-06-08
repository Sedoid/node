const express = require('express')
const router = express.Router()
const {manage} = require('../models/manageDB');

    
    staff = new manage('staff')
    let list = staff.get('staff');

    router.use(express.urlencoded({ extended:false }) )

    router.get('/staff',(req,res)=>{
        list = staff.get('staff');
        res.json(list);
    })
    .post('/staff',(req,res)=>{
        console.log('this is the body');
        console.log(req.body)
        staff.create('staff',req.body);
    
        res.send('adding a new staff');
    
    })
    .patch('/staff/:id',(req,res)=>{
        console.log('this is the body');
        console.log(req.body)
        staff.create('staff',req.body);
    
        res.send('adding a new staff');
    
    })
    .delete('/staff/:id',(req,res)=>{
        
        let id = req.params.id;
        console.log(req.params)
        staff.delete('staff',id)
        res.send('deleted');
    })
    
module.exports = router;