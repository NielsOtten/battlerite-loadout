import mongoose from 'mongoose';
import mongooseHistory from 'mongoose-history';
import errorMessages from '../common/errorMessages';

const Schema = mongoose.Schema({
  name: {
    type: String,
    required: errorMessages.REQUIRED_ERROR,
    unique: errorMessages.UNIQUE_ERROR,
  },
});

Schema.plugin(mongooseHistory);

export default mongoose.model('User', Schema);
