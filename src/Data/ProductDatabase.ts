import { CustomError } from "../CustomError.ts/CustomError";
import { RegisterProductDB } from "../Model/types";
import { BaseDatabase } from "./BaseDatabase";


export class ProductDatabase extends BaseDatabase {
     private static TABLE_NAME = "amaro_products"

     public async registerProduct (input: RegisterProductDB) {
          try {
               
               await BaseDatabase.connection
               .insert(input)
               .into(ProductDatabase.TABLE_NAME)

          } catch (error:any) {
               throw new CustomError(400, error.sqlMessage)
          }
     }

     public async getProductById (id: string) {
          try {

               const response = await BaseDatabase.connection
               .select('*')
               .where({id})
               .from(ProductDatabase.TABLE_NAME)
               
               return response
          } catch (error:any) {
               throw new CustomError(400, error.sqlMessage)
          }
     }

     public async getProductByName (name: string) {
          try {

               const response = await BaseDatabase.connection
               .select('*')
               .where('name', '=', `${name}`)
               
               return response
          } catch (error:any) {
               throw new CustomError(400, error.sqlMessage)
          }
     }

     public async getProductByTag (tag: string) {
          try {

               const response = await BaseDatabase.connection
               .select('*')
               .where('tag', '=', `${tag}`)
               
               return response
          } catch (error:any) {
               throw new CustomError(400, error.sqlMessage)
          }
     }

}