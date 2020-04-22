var express = require('express')
var bodyParser = require('body-parser');
var path = require('path')
var apiRoutes = require('./routes/ApiRoutes')

var app = express();

app.use(express.static(path.join(__dirname,'/build')));
app.use(bodyParser.json());

app.use('/api', apiRoutes)

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'/build/index.html'));
})

app.listen(8000, () => console.log(`Listening on port 8000`))





module.exports = app;