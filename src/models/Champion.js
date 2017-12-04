import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import errorMessages from '../common/errorMessages';

const Schema = mongoose.Schema({
  name: {
    type: String,
    unique: errorMessages.UNIQUE_ERROR,
    required: `Name ${errorMessages.REQUIRED_ERROR}.`,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  stats: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Stat',
  }],
});

Schema.plugin(uniqueValidator);

export default mongoose.model('Champion', Schema);
