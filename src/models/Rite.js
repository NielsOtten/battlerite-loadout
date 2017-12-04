import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import errorMessages from '../common/errorMessages';

const Schema = mongoose.Schema({
  name: {
    type: String,
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
  image: {
    type: String,
    required: errorMessages.REQUIRED_ERROR,
  },
  champion: {
    type: mongoose.Schema.ObjectId,
    ref: 'Champion',
  },
});

Schema.plugin(uniqueValidator);

export default mongoose.model('Rite', Schema);
