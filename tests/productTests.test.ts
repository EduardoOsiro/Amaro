import ProductBusiness from "../src/Business/ProductBusiness";

const inputMock = {
     name: "CALÇA" as any,
     tags: ["CALÇA"] as any
}

describe('input tests', ()=> {
     test('test - empty name', async () => {
          const input = inputMock
          input.name = ''
          try {
              await ProductBusiness.registerProduct(input)
          } catch (error: any) {
              input.name = 'CALÇA'
              expect(error.message).toEqual("Por favor, insira o nome do produto.")
          } finally {
              expect.assertions(1)
          }
      })

      test('test - empty tags', async () => {
          const input = inputMock
          input.tags = undefined
          try {
              await ProductBusiness.registerProduct(input)
          } catch (error: any) {
              input.tags = ['CALÇA']
              expect(error.message).toEqual("Por favor, insira uma tag de identificação.")
          } finally {
              expect.assertions(1)
          }
      })
})