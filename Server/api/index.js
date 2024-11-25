const express = require("express");
require("dotenv").config();
const app = express();
const MongoStore = require('connect-mongo');
const serverless = require("serverless-http");
//All Routers
const {
  studentRouter,
  teacherRouter,
  timeTableRouter,
  uploadRouter,checkRouter
  ,headlineRouter
  ,researchRouter
  ,certificationRouter
  ,placementStudentRouter
} = require("../service/AllRoutes");
// const path = require("path");
const {connectDb} = require("../db/connectdb");

//passport js
const session = require("express-session");

//cors for set cors origen
const cors = require("cors");

// CookieExtractor For Extracte cookies from request
// const { isAuth } = require("./service/com");

// TODO: cors setup
// app.use(express.static("build"));
app.use(cors());

// TODO: body parser
app.use(express.json());
// app.use(cookieParser());

// TODO: session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secret', // Use a secure secret in production
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URL, // MongoDB connection string
      ttl: 14 * 24 * 60 * 60, // Sessions expire after 14 days
    }),
    cookie: {
      maxAge: 14 * 24 * 60 * 60 * 1000, // Cookie expiration time
      secure: process.env.NODE_ENV === 'production', // Set this to true if using HTTPS
      httpOnly: true,
    },
  })
);
app.get('/',(req,res)=>res.send("Hello world"))
// app.get("*", (req, res) => res.sendFile(path.resolve("build")));
// app.use("/auth", authRouter.router);
// app.use("/user", isAuth(), userRouter.router);
app.use("/student", studentRouter.router);
app.use("/teacher", teacherRouter.router);
app.use("/timeTable", timeTableRouter.router);
app.use("/headline", headlineRouter.router);
app.use("/upload", uploadRouter.router);
app.use("/research", researchRouter.router);
app.use("/certification", certificationRouter.router);
app.use("/placementStudent", placementStudentRouter.router);



module.exports = app;
module.exports.handler = serverless(app);
connectDb();
