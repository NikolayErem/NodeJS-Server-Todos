const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const url_db = 'mongodb://127.0.0.1:27017/tasksdb';

app.use(cors());

const apiRoutes = require('./src/modules/routes/routes');

mongoose.connect(url_db);
app.use(bodyParser.json());
app.use('/', apiRoutes);





app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});