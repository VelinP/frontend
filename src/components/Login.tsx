import * as auth from '../util/authservice'
import { FC } from "react"

export const Login:FC = () =>{
  
    interface InfoInterface{
        
        password:string | File,
        email:string | File
    }

    const logger = (event:any):void =>{
        event.preventDefault()
        const { password , email } = Object.fromEntries(new FormData(event.target));
        const data:InfoInterface = {password,email};
        //auth.login("http://localhost:4000/post", data)
    }
    

    return(
        <div className="submitdiv">
            <div className="submitholderdiv">
            <h1>Login</h1>

                <form id="create" onSubmit={logger}>
                <input name="username" id="description" placeholder="username"></input>
                <input name="password" id="description" placeholder="password"></input>
                <input name="email" id="description" placeholder="email"></input>
                <button>Submit</button>
                </form>
            </div>

        </div>
        
        
    )

}