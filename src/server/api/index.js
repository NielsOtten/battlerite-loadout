import express from 'express';
import ChampionRoutes from './ChampionRoutes';

const router = express.Router();

router.use('/champion', ChampionRoutes);

export default router;
