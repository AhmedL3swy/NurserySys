const mongoose = require("mongoose");
const autoIncrement = require("@alec016/mongoose-autoincrement");

autoIncrement.initialize(mongoose.connection);

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  supervisor: { type: Number, ref: "teachers" },
  children: { type: [Number], required: true, ref: "child" },
});

schema.plugin(autoIncrement.plugin,{
  model: "class",
  startAt: 1,
  incrementBy: 1,
  unique: true,
  field: "_id",
});

mongoose.model("class", schema);
