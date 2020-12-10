const db = require("mongoose");

const clientSchema = new db.Schema(
  {
    destinatary_user_email: {
      type: String
    },
    item_id: {
      type, String,
    },
    detail: {
      type: String,
    },
    remitent_user_name: {
      type: String,
    },
    remitent_user_email: {
      type: String,
    },
    
  },
  { timestamps: true }
);

module.exports = db.model("Message", clientSchema);