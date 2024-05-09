import { Router } from 'express';

export const router = Router()

router.get('/', (req, res) => {
    return res.status(200).json({ messagem: 'O servidor está funcionando!'})
})