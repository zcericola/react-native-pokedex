//dependencies
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const {getResults, getDetails} = require('./controllers/mainCtrl');

//server port
const port = 3002;
//creates instance of express server
const app = express();
//MiddleWares
app.use(cors());
app.use(json());

//endpoints
app.get('/pokemon', getResults);
app.post('/details', getDetails);

//Checking that server is running
app.listen(port, () => {
  console.log(`We are listening on port: ${port}`);
});
