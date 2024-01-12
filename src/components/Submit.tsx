import { useEffect , useState } from "react"
import * as requester from '../util/requester'
import { FC } from "react"

export const Submit:FC = () =>{
    //const [items,setitems] = useState([])
    //useEffect(()=> {requester.get("http://localhost:4000/").then((data) => {setitems(data)})},[])
    
    interface info{
        title:string | File,
        info:string | File,
        username:string | File
    }

    const logger = (event:any):void =>{
        event.preventDefault()
        const { title , info , username } = Object.fromEntries(new FormData(event.target));
        const data:info = {title,info,username};
        requester.post("http://localhost:4000/post", data)
    }
    

    return(
        <div className="submitdiv">
        
            <form id="create" onSubmit={logger}>
                <button>Submit</button>

                <textarea name="title" id="description" placeholder="Title"></textarea>
                <textarea name="info" id="description" placeholder="Info"></textarea>
                <textarea name="username" id="description" placeholder="Username"></textarea>


        </form>

        </div>
        
        
    )

}