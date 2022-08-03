

export interface RegisterProductDTO {
     name: string,
     tags:string[]
}

export type RegisterProductDB = RegisterProductDTO & {id:string}