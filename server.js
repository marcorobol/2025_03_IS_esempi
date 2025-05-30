var express = require('express');
var app = express();
app.use(express.json());

const port = 3000;

// Handling GET requests
app.get('/api', function(req, res){
    res.status(404).send('Welcome to APIs!');
});

app.all('/api/users/:userId', function(req, res){
    console.log(req.method, req.url, "log message");
    console.log(req.params);
    console.log(req.headers);
    console.log(req.query);
    console.log(req.body);
    res.location("/api/users/" + req.params.userId).send();
});

app.listen(port, function() {
    console.log('Server running on port ', 3000);
});

console.log('Server starting on port ', 3000);