import { useEffect , useState } from "react"
import * as requester from '../util/requester'
import { FC } from "react"

export const Submit:FC = () =>{
    //const [items,setitems] = useState([])
    //useEffect(()=> {requester.get("http://localhost:4000/").then((data) => {setitems(data)})},[])
    
    interface InfoInterface{
        username:string | File,
        password:string | File,
        email:string | File
    }

    const logger = (event:any):void =>{
        event.preventDefault()
        const { username , password , email } = Object.fromEntries(new FormData(event.target));
        const data:InfoInterface = {username,password,email};
        console.log(data)
        requester.post("http://localhost:4000/post", data)
    }
    

    return(
        <div className="submitdiv">
        
            <form id="create" onSubmit={logger}>

                <input name="username" id="description" placeholder="username"></input>
                <input name="password" id="description" placeholder="password"></input>
                <input name="email" id="description" placeholder="email"></input>

                <button>Submit</button>



        </form>

        </div>
        
        
    )

}