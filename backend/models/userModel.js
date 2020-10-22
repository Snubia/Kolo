import mongoose from 'mongoose';

// Creating the user admin
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true
  }, // by default, the user is not an admin 
}, {
  timestamps: true,
});
const User = mongoose.model('User', userSchema); // the model for the schema, model name + user shema
export default User;