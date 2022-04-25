const express = require('express');
const app = express()
const path = require('path');

app.set("/","html");
app.use(express.static(path.joing(__dirname,"/")));
app.use(express.json());
app.use('/', (reg,res) => (
  res.render('index');
 ));

app.listen(8080,() => (
  console.log("listenign on local host);
));
