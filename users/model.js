// Define UserSchema & UserModel

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: { type: String, default: '' },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

userSchema.set('toObject', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    delete ret.password;
  }
});

module.exports = mongoose.model('User', userSchema);
