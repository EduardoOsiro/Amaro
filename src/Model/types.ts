

export interface RegisterProductDTO {
     name: string,
     tags:string[]
}

export type RegisterProductDB = RegisterProductDTO & {id:string}

export interface GetProductDTO {
     id: string,
     name: string,
     tags: string
}