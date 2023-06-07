const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
const url =
  "mongodb+srv://mynewproject:Apnaproject1@cluster0.xi5e96r.mongodb.net/";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully😎😎✅✅"))
    .catch((err) => console.log("Error: ", err));
};
