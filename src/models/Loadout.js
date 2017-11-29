import mongoose from 'mongoose';
import errorMessages from '../common/errorMessages';

function arrayLimit(val) {
  return val.length <= 5;
}

const Schema = mongoose.Schema({
  name: {
    type: String,
    required: `Name ${errorMessages.REQUIRED_ERROR}.`,
  },
  description: {
    type: String,
  },
  champion: {
    type: mongoose.Schema.ObjectId,
    ref: 'Champion',
  },
  rite: {
    type: [{
      type: mongoose.Schema.ObjectId,
      ref: 'Rite',
    }],
    validate: [arrayLimit, '{PATH} exceeds the limit of 5.'],
  },
});

export default mongoose.model('Loadout', Schema);
