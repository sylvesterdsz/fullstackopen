const mongoose = require("mongoose");

const url = process.env.MONGODB_URL;

mongoose.set("strictQuery", false);
mongoose
  .connect(url, { family: 4 })
  .then((result) => {
    console.log("Connection to DB established");
  })
  .catch((error) => {
    console.log("Error connecting to DB:", error.message);
  });

const phoneBookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters long"],
  },
  number: {
    type: String,
    required: true,
  },
});

phoneBookSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Person", phoneBookSchema);
