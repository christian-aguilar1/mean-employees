const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mean-employees", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Database connected"))
  .catch((err) => console.log(err));
