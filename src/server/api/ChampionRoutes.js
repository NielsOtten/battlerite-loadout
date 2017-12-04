import express from 'express';
import Champion from '../../models/Champion';
import Rite from '../../models/Rite';

const router = express.Router();

/**
 * Returns a array with all available champions.
 */
router.get('/list', async (req, res) => {
  const champions = await Champion.find();
  return res.json(champions);
});

router.get('/:id/rites', async (req, res) => {
  const { id } = req.params;
  const rites = await Rite.find({ champion: id });
  return res.json(rites);
});

export default router;
