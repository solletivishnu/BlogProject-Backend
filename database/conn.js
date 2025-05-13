const mongoose = require("mongoose");

const db = process.env.MONGO_URI;

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("connection established...!");
})
.catch((error) => {
  console.log("MongoDB connection error:", error);
});
