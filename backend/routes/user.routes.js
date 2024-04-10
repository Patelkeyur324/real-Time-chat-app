import express from 'express';
import { getUsersForsidebar } from '../controllers/user.controller.js';
import protectRoute from '../midddleware/protectRoute.js';

const router = express.Router();

router.get("/",protectRoute,getUsersForsidebar);

export default router;