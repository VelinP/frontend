import * as auth from '../util/authservice'
import { FC } from "react"
import { useNavigate } from 'react-router-dom'

export const Register:FC = () =>{
    const navigate = useNavigate()

    interface InfoInterface{
        username:string | File,
        password:string | File,
        email:string | File
    }

    const registerer = (event:any):void =>{
        event.preventDefault()
        const { username , password , email } = Object.fromEntries(new FormData(event.target));
        const data:InfoInterface = {username,password,email};
        console.log(data)
        auth.register("http://localhost:4000/register", data).then(()=>{navigate('/login')})
    }
    

    return(
        <div className="submitdiv">
            <div className="submitholderdiv">
            <h1>Register</h1>

                <form id="create" onSubmit={registerer}>
                <input name="username" id="description" placeholder="username"></input>
                <input name="password" id="description" placeholder="password"></input>
                <input name="email" id="description" placeholder="email"></input>
                <button>Submit</button>
                </form>
            </div>

        </div>
        
        
    )

}