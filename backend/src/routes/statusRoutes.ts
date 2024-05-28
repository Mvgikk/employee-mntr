import { Router } from 'express';
import { addStatus, getStatusesAggregated } from '../controllers/statusController';

const router = Router();

router.get('/:date', getStatusesAggregated);
router.post('/', addStatus);

export default router;
