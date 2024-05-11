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
        
        const cardapio = this.waiterService.getCardapio()
        return res.status(200).json( cardapio )
    }
}


