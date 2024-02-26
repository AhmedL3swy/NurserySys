const mongoose = require("mongoose");
const autoIncrement = require("@alec016/mongoose-autoincrement");
autoIncrement.initialize(mongoose.connection);

const address = new mongoose.Schema(
  {
    city: String,
    street: String,
    building: Number,
  },
  { _id: false }
);

const schema = new mongoose.Schema({
  fullname: String,
  address: address,
  age: Number,
  level: String,
  image: String,
});

schema.plugin(autoIncrement.plugin,{
  model: "child",
  startAt: 1,
  incrementBy: 1,
  unique: true,
  field: "_id",
});


mongoose.model("child", schema);
