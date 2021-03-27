const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = mongoose.Schema({
  name: {
    first: {
      type: String,
      required: true,
      trim: true
    },
    last: {
      type: String,
      required: true,
      trim: true
    }
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: Number,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
})

userSchema.methods.toJSON = function(){
  const user = this

  userObject = user.toObject()

  delete userObject.password

  return userObject
}

// Hash password before save
userSchema.pre('save', async function(next){
  const user = this;

  if(user.isModified('password')){
    user.password = await bcrypt.hash(user.password, 8)
  }

  next()
})

const User = mongoose.model('User', userSchema);

module.exports = User;