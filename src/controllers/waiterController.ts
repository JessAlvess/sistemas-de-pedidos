import { Request, Response } from 'express'
import { WaiterService } from '../services/waiterService'

export class WaiterController {
    
    waiterService: WaiterService

    constructor (
        waiterService = new WaiterService()
    ) {
        this.waiterService = waiterService
    }

    getCardapio = (req: Request, res: Response): Response => {
        const menu = this.waiterService.getMenu()
        return res.status(200).json( menu )
    }
}