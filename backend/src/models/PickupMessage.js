const db = require("mongoose");

const clientSchema = new db.Schema(
  {
    destinatary_user_email: {
      type: String
    },
    description: {
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

module.exports = db.model("PickupMessage", clientSchema);