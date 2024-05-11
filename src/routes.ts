import { Router } from 'express';
import { WaiterController } from './controllers/waiterController';

export const router = Router()

const waiterController = new WaiterController()

router.get('/', waiterController.getCardapio)