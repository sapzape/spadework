const mongoose = require('mongoose');

// Define schemes
const userSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  userId: { type: String, required: true, unique: true },
  createTime: { type: Date },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }],
  likeSchool: [{
    id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School"
  },
  createTime: { type: Date },
  deleteTime: { type: Date },
  }]
});

// Create new user document
userSchema.statics.create = function (payload) {
  const user = new this(payload);
  return user.save();
};

// Find all
// userSchema.statics.findAll = function () {
//   return this.find({});
// };

// Find one by UserId
userSchema.statics.findOneByUserId = function(userId) {
  return this.findOne({ userId });
};

// 기능은 우선 구현 완료
// Update by UserId
userSchema.statics.updateByUserId = function (userId, school) {
  return this.findOneAndUpdate({ userId }, {$addToSet: school}, { new: true });
};

// 기능은 우선 구현 완료
userSchema.statics.unlikeByUserId = function (userId, school) {
  return this.findOneAndUpdate({ userId }, {$pull: school}, { new: true });
};

// Delete by UserId
// userSchema.statics.deleteByUserId = function (userId, school) {
//   return this.remove({ userId });
// };

// Create model & export
module.exports = mongoose.model('User', userSchema);