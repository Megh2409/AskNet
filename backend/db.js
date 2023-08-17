const mongoose = require("mongoose");

const url ="mongodb+srv://megh:riderprovider@asknetmern.zim183i.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://megh:riderprovider@asknetmern.zim183i.mongodb.net/?retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};