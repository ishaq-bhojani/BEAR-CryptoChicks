const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const compression = require("compression");
const helmet = require("helmet");

/*const indexRouter = require("./routes/index");*/
const usersRouter = require("./routes/users");

const app = express();
app.use(helmet({ xssFilter: { setOnOldIE: true }}));
app.get("*", function(req, res, next) {
  if (req.get("host") !== "localhost:3000" && req.headers["x-forwarded-proto"] !== "https") {
    res.redirect("https://" + req.get("host") + req.url);
  } else {
    next();
  }
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "dist")));

/*app.use("/", indexRouter);*/
app.use("/api", usersRouter);

app.get("/", sendIndexFile);
app.get("*", sendIndexFile);

function sendIndexFile(req, res) {
  res.sendFile(path.join(__dirname, "dist/index.html"));
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

const https = require("https");
setInterval(function() {
  https.get("https://bear-crypto.herokuapp.com");
}, 300000);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
