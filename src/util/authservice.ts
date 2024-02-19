import * as request from './requester.ts'

export const login =(url:string, data:any):Promise<any> => request.post(url, data)

export const register = async(url:string, data:any) => {
    request.post(url, {data})
    }
           
       

   
