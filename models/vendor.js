const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
  name: String,
});

module.exports = mongoose.model("Vendor", VendorSchema);
