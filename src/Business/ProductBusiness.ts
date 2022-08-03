import { CustomError } from "../CustomError.ts/CustomError";
import { RegisterProductDB, RegisterProductDTO } from "../Model/types";
import { IdGenerator } from "../Services/IdGenerator";


export class ProductBusiness {

     constructor (
          private idGenerator: IdGenerator
     ) {}

     public async registerProduct (input: RegisterProductDTO) {
          try {

               const { name, tags } = input

               if(!name) {
                    throw new CustomError(422, "Por favor, insira o nome do produto.")
               }
               if(!tags) {
                    throw new CustomError(422, "Por favor, insira uma tag de identificação.")
               }
               
               const register: RegisterProductDB = {
                    id: this.idGenerator.generateId(),
                    name,
                    tags
               }

               await this.productDatabase.registerProduct(register)

          } catch (error:any) {
               throw new CustomError(error.statusCode, error.message)
          }
     }
}