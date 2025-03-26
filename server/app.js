require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var eventRouter = require("./routes/events");
var app = express();


// Log the HOST_URL to ensure it's being set correctly
console.log("HOST_URL:", process.env.HOST_URL);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

const allowedOrigins = [process.env.HOST_URL, "http://localhost:8080"];
app.use(
  cors({
    origin: function (origin, callback) {
      console.log("Origin:", origin);
      console.log("Allowed Origins:", allowedOrigins);
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        console.log("Blocked Origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true // Add this line to allow credentials
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/events", eventRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen();

module.exports = app;
