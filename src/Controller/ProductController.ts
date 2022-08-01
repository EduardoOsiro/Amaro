import { Request, Response } from "express";
import { RegisterProductDTO } from "../Model/types";


export class ProductController {

     public async registerProduct (req: Request, res: Response) {
          try {
               
               const {name, tags} = req.body

               const input: RegisterProductDTO = {
                    name,
                    tags
               }

               await ProductBusiness.registerProduct(input)
          } catch (error:any) {
               res.status(400).send(error.message)
          }
     }

}