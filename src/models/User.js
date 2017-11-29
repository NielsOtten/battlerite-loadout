import mongoose from 'mongoose';
import errorMessages from '../common/errorMessages';

const Schema = mongoose.Schema({
  name: {
    type: String,
    required: errorMessages.REQUIRED_ERROR,
    unique: errorMessages.UNIQUE_ERROR,
  },
});

export default mongoose.model('User', Schema);
