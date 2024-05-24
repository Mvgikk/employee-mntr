import { Router } from 'express';
import { getHired, addHired, deleteHired,getEmployeesByUserId } from '../controllers/hiredController';

const router = Router();

router.get('/', getHired);
router.post('/', addHired);
router.delete('/:id', deleteHired);
router.get('/:userId', getEmployeesByUserId);

export default router;
