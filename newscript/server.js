// //REST API
// const express = require('express');
// const app = express();
// const fs = require('fs');
// //endpoint to get a list of users
// app.get('/getUsers',(req,res)=> {
//     fs.readFile(__dirname + "/" + "../database/users.json",'utf8',(err,data) => {
//         console.log(data);
//         res.end(data);//you can also use res.send();
//     });
// });
// const server = app.listen(8080,() => {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('lavinsta listening at http://%s:%s',host,port);
// });
