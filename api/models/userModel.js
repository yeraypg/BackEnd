const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Name is required'],
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    validate: {
      validator(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
      }
    },    
    unique: true
  },
  rol: {
    type: String,
    enum: ['Admin','Coach', 'Student', 'User'],
    default: 'User'
  },
  spot: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'spot'
  }]
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
