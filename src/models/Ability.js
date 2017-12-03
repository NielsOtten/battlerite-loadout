import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongooseHistory from 'mongoose-history';
import { isHexColor } from 'validator';
import errorMessages from '../common/errorMessages';

const Schema = mongoose.Schema({
  name: {
    type: String,
    unique: errorMessages.UNIQUE_ERROR,
    required: errorMessages.REQUIRED_ERROR,
  },
  type: {
    type: String,
    required: errorMessages.REQUIRED_ERROR,
  },
  description: {
    type: String,
    required: errorMessages.REQUIRED_ERROR,
  },
  image: {
    type: String,
    required: errorMessages.REQUIRED_ERROR,
  },
  color: {
    type: String,
    required: errorMessages.REQUIRED_ERROR,
    validate: {
      isAsync: true,
      validator: isHexColor,
      message: errorMessages.VALIDATE_ERROR,
    },
  },
  champion: {
    type: mongoose.Schema.ObjectId,
    ref: 'Champion',
  },
});

Schema.plugin(uniqueValidator);
Schema.plugin(mongooseHistory);

export default mongoose.model('Ability', Schema);
