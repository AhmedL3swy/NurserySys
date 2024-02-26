const mongoose = require("mongoose");
const autoIncrement = require("@alec016/mongoose-autoincrement");
autoIncrement.initialize(mongoose.connection);


const schema = new mongoose.Schema({
  _id :{type:Number, required:true, unique:true, default:0},
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String},
  
});

schema.plugin(autoIncrement.plugin,{
  model: "teachers",
  startAt: 1,
  incrementBy: 1,
  unique: true,
  field: "_id",
});


mongoose.model("teachers", schema);
