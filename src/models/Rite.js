import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { isHexColor } from 'validator';
import errorMessages from '../common/errorMessages';

const Schema = mongoose.Schema({
  name: {
    type: String,
    unique: errorMessages.UNIQUE_ERROR,
    required: `Name ${errorMessages.REQUIRED_ERROR}.`,
  },
  type: {
    type: String,
    required: `Name ${errorMessages.REQUIRED_ERROR}.`,
  },
  description: {
    type: String,
    required: `Description ${errorMessages.REQUIRED_ERROR}.`,
  },
  color: {
    type: String,
    required: `Color ${errorMessages.REQUIRED_ERROR}.`,
    validate: {
      isAsync: true,
      validator: isHexColor,
      message: `${errorMessages.VALIDATE_ERROR} hex color.`,
    },
  },
  ability: {
    type: mongoose.Schema.ObjectId,
    ref: 'Ability',
  },
});

Schema.plugin(uniqueValidator);

export default mongoose.model('Rite', Schema);
