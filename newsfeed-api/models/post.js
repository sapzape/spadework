const mongoose = require('mongoose');

// Define schemes
const postSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  contents: { type: String, required: true },
  createTime: { type: Date },
  creator: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  from: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: "School"
  }]
});

// Create new user document
postSchema.statics.create = function (payload) {
  const user = new this(payload);
  return user.save();
};

// Find all
postSchema.statics.findAll = function () {
  return this.find({});
};

// Find one by UserId
postSchema.statics.findOneByUserId = function(userId) {
  return this.findOne({ userId });
};

// Update by UserId
postSchema.statics.updateByUserId = function (userId, payload) {
  return this.findOneAndUpdate({ userId }, payload, { new: true });
};

// Delete by UserId
postSchema.statics.deleteByUserId = function (userId) {
  return this.remove({ userId });
};

// Create model & export
module.exports = mongoose.model('Post', postSchema);