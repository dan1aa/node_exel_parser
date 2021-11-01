const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
require('dotenv').config()
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;
const mainRoute = require('./routes/main.js')
const getDataRoute = require('./routes/getData.js')
const postDataRoute = require('./routes/postData.js')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(mainRoute)
app.use(getDataRoute)
app.use(postDataRoute)


async function start() {
  try {
      await mongoose.connect(MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
      })

      app.listen(PORT, 
          () => console.log(`server is running on ${PORT}`)
      )
  }

  catch(e) {
      throw new Error(e)
  }
  
}

start()