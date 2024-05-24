import { Router } from 'express';
import { getStatuses, addStatus } from '../controllers/statusController';

const router = Router();

router.get('/:date', getStatuses);
router.post('/', addStatus);

export default router;
