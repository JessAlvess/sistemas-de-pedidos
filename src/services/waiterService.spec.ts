import { WaiterService } from "./waiterService"
import { menu } from "../__mocks__/mockMenu.mock"

describe('WaiterService', () => {
    
   
    it('Deve retornar o cardápio', () => {
        
        const waiterService = new WaiterService(menu)
    
        jest.spyOn(waiterService, 'getMenu').mockReturnValue(menu)
    
        const resultado = waiterService.getMenu()

        expect(waiterService.getMenu).toHaveBeenCalledWith()

        expect(resultado).toBe(menu)
    })
})