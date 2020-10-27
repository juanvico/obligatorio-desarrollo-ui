const db = require("mongoose");

const clientSchema = new db.Schema(
  {
    description: {
      type: String,
    },
    images: {
      type: [String]
    },
    pickup_location: {
      type: String,
    },
    available_to_pickup: {
      type: Boolean,
      default: true,
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

module.exports = db.model("Item", clientSchema);