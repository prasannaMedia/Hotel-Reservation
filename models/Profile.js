mongoose = require("mongoose");

ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  checkin :{type:Date},
  checkout:{type:Date},
  rooms:{type:Number},
  No:{type:Number},
  adult:{type:Number},
  phone:{type:Number},  
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports =Profile= mongoose.model("profile", ProfileSchema);
