import * as request from './requester.ts'

export const login =(email:string, password:string):Promise<any> => request.post("http://localhost:4000/login", {email,password})

export const register = async(url:string, data:any) => {
    request.post(url, {data})
    }
           
       

   
