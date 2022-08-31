import express from 'express';

import tokensTransfer from './src/tokensTransfer.js';
import contractInteraction from './src/contractInteraction.js';

const router = express.Router();

router.get('/tokens-transfer', tokensTransfer);
router.get('/contract-interaction', contractInteraction);

export default router;
