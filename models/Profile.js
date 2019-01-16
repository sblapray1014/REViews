const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  googleReviewLink: {
    type: String
  },
  zillowReviewLink: {
    type: String
  },
  truliaReviewLink: {
    type: String
  },
  facebookReviewLink: {
    type: String
  }
});

mongoose.model("profile", profileSchema);
