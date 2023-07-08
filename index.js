const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//const { title } = require("process");

const app = express();

const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// const connectDB = async () => {
// //   if(mongoose.connection.readyState >= 1){    
// //     console.log("database connected")
// //     return;
// // }
//   try {
//       await mongoose.connect('mongodb://localhost:27017/newdatadb');
//       console.log("DB is connected");
//   }
//   catch (error) {
//       console.log("DB is not connected");
//       console.log(error);
//       process.exit(1);
//   }
  
// };
app.get("/", (req, res) => {
  res.send("welcome to Ela's page");
});


const dishRouter = require("../routes/dishRouter");
const promoRouter = require("../routes/promoRouter");
const leaderRouter = require("../routes/leaderRouter");
const dbConnect = require("./config/dbConfig");

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leader', leaderRouter);

app.listen(port,async() => {
  console.log(`server is running successfully.at http://localhost :${port}..`);
  //await connectDB();
  await dbConnect();
});








// const express = require("express");
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();


// app.use(cors());
// app.use(bodyParser.json());

// // app.use(express.json());
// // app.use(express.urlencoded({extended:true}));

// // const connectDB = async () => {
// //   try {
// //       await mongoose.connect('mongodb://127.0.0.1:27017/elaDB');
// //       console.log("DB is connected");
// //   }
// //   catch (error) {
// //       console.log("DB is not connected");
// //       console.log(error);
// //       process.exit(1);
// //   }
  
// // };

// // mongoose
// //     .connect('mongodb://127.0.0.1:27017/runDB')
// //     .then(() => console.log("DB is connected"))
// //     .catch((error) => {
// //         console.log("DB is not connected");
// //         console.log(error);
// //         process.exit(1);
// //     });

// mongoose.connect("mongodb://localhost/assignment", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const connect = mongoose.connection;

// connect.on("open", () => {
//   console.log("DB connected... ");
// });


// app.use(express.json());
// const dishRouter = require("../routes/dishRouter");
// const promoRouter = require("../routes/promoRouter");
// const leaderRouter = require("../routes/leaderRouter");

// app.use('/dishes', dishRouter);
// app.use('/promotions', promoRouter);
// app.use('/leader', leaderRouter);

// app.listen(3004, () => {
//     console.log(`listening on port 3004`);
// });

