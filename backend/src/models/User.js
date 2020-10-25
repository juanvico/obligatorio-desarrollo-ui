const db = require("mongoose");

const clientSchema = new db.Schema(
  {
    name: {
      type: String,
    },
    password: {
      type: String
    },
    email: {
      type: String,
      unique: true
    }
  },
  { timestamps: true }
);

module.exports = db.model("User", clientSchema);