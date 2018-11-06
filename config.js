const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect('mongodb://' + process.env.DB_HOST +
                 ':' + process.env.DB_PORT +
'/' + process.env.DB_NAME, {
  useNewUrlParser: true,
  useCreateIndex: true
 });
