import { WaiterService } from "./waiterService"
import { cardapio } from "../__mocks__/mockCardapio.mock"
import { Cardapio } from "../interfaces/interfaces"


describe('WaiterService', () => {

    const mockWaiterService: Partial<WaiterService> = {
        getCardapio: jest.fn()
    }

    const mockCardapio: Cardapio = cardapio

    const waiterService = new mockWaiterService()

    it('Deve retornar o cardápio', () => {
        
        waiterService.getCardapio()
        expect(mockCardapio).toHaveBeenCalledWith(mockCardapio)
    })
    
})