import { Request, Response } from "express";
import  ProductBusiness  from "../Business/ProductBusiness";
import { GetProductDTO, RegisterProductDTO } from "../Model/types";


export class ProductController {

     public async registerProduct (req: Request, res: Response) {
          try {
               
               const {name, tags} = req.body

               const input: RegisterProductDTO = {
                    name,
                    tags
               }

               const result = await ProductBusiness.registerProduct(input)

               res.status(201).send(result)
          } catch (error:any) {
               res.status(400).send(error.message)
          }
     }

     public async getProduct (req: Request, res: Response) {

          try {
               const search = req.params as any

               const response = await ProductBusiness.getProduct(search)

               res.status(200).send(response)
          } catch (error:any) {
               res.status(400).send(error.message)
          }
     }

}