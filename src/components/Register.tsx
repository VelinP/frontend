import { useEffect , useState } from "react"
import * as requester from '../util/requester'
import { FC } from "react"

export const Register:FC = () =>{
    interface InfoInterface{
        username:string | File,
        password:string | File,
        email:string | File
    }

    const logger = (event:any):void =>{
        event.preventDefault()
        const { username , password , email } = Object.fromEntries(new FormData(event.target));
        const data:InfoInterface = {username,password,email};
        requester.post("http://localhost:4000/post", data)
    }
    

    return(
        <div className="submitdiv">
            <div className="submitholderdiv">
            <h1>Please enter your data</h1>

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