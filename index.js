const express =  require('express')
const exphbs = require('express-handlebars');
const path = require('path');
const Students = require('./controllers/students')
const Staff = require('./controllers/staff')
const Courses = require('./controllers/courses')
const logger = require('./utils/logger')
const auth = require('./utils/auth')

 


const app = express();

// Todo , convert handlebars to .bbs  
app.engine('handlebars',exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine','handlebars')


// app.use('/api',Courses);
app.use('/api',Students);
app.use('/api',Staff);


app.get('/',(req,res)=>{
    res.render('admin');
})

app.listen(3000,()=>{
    console.log('Server listening on port 3000')
})
