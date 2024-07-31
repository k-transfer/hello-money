import { Router } from 'express';
import { register, login, logout } from '../controllers/authController';
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

export default router;