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

     public async getProduct (search: string) {
          try {
               const  response = await BaseDatabase.connection("amaro_products")
               .select('*')
               .where('id', 'like', `${search}`)
               .or
               .where('name', 'like', `${search}`)
               .or
               .where('tags', 'like', `${search}`)
           
               return response
   
          } catch (error:any) {
               throw new CustomError(400, error.sqlMessage)
          }
     }

     // public async getProductByName (name: string) {
     //      try {

     //           const response = await BaseDatabase.connection
     //           .select('*')
     //           .where('name', '=', `${name}`)
               
     //           return response
     //      } catch (error:any) {
     //           throw new CustomError(400, error.sqlMessage)
     //      }
     // }

     // public async getProductByTag (tag: string) {
     //      try {

     //           const response = await BaseDatabase.connection
     //           .select('*')
     //           .where('tag', '=', `${tag}`) 
               
     //           return response
     //      } catch (error:any) {
     //           throw new CustomError(400, error.sqlMessage)
     //      }
     // }

}