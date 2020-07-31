var express =require('express');
var bodyParser = require('body-parser')
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine' , 'ejs');

app.use('/css',express.static('css'));
app.use('/js',express.static('js'));
app.get('/', function(req,res){
    //// res.send('You requested to see profile' + req.params.id);
    res.render('index',{qs: req.query} );
 });
 app.get('/home', function(req,res){
    //// res.send('You requested to see profile' + req.params.id);
    res.render('index',{qs: req.query} );
 });
 app.get('/onlineTreatment', function(req,res){
    //// res.send('You requested to see profile' + req.params.id);
     res.render('onlineTreatment',{qs: req.query} );
 });
 app.get('/contact', function(req,res){
    //// res.send('You requested to see profile' + req.params.id);
     res.render('contact',{qs: req.query} );
 });
 app.post('/patientAppointment', function (req, res) {
    res.render('patientAppointment',{qs: req.query} );

})
