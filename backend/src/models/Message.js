const db = require("mongoose");

const clientSchema = new db.Schema(
  {
    destinatary_user_email: {
      type: String
    },
    detail: {
      type: String,
    },
    user_name: {
      type: String
    },
    user_email: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = db.model("Message", clientSchema);