const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
});
placeSchema.index({ location: '2dsphere' });

const Location = mongoose.model("Locations", placeSchema);

module.exports = Location;
