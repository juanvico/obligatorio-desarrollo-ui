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
      type: String
    }
  },
  { timestamps: true }
);

export default db.model("User", clientSchema);