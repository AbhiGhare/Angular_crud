const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');

//all routes require
// const router = require('./routes');
// const common_route = require('./commonRoute');
const router = require("./routes/listings");



const app = express();

app.use(express.json());


// app.use(cors({origin:'http://localhost:4200'}));

//all routes here
// app.use('/post',router);
// app.use('/posts',common_route);
app.use('/list',router);


app.listen(3000,()=>{
    console.log('server is started on port 3000');
});


//mongodb connection -------------------------------|||||||||||||||||||||||||||||||||

(async function () {
    try {
      await mongoose.connect( 'mongodb://127.0.0.1:27017/userLists');
      console.log('Connected to DB.');
    //   server.listen(PORT, () => console.log('Server is listening on port ' + PORT))
    } catch (error) {
      console.log(error)
    }
  })();

