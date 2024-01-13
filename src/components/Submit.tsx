import { useEffect , useState } from "react"
import * as requester from '../util/requester'
import { FC } from "react"

export const Submit:FC = () =>{
    //const [items,setitems] = useState([])
    //useEffect(()=> {requester.get("http://localhost:4000/").then((data) => {setitems(data)})},[])
    
    interface InfoInterface{
        title:string | File,
        info:string | File,
        username:string | File
    }

    const logger = (event:any):void =>{
        event.preventDefault()
        const { title , info , username } = Object.fromEntries(new FormData(event.target));
        const data:InfoInterface = {title,info,username};
        console.log(data)
        requester.post("http://localhost:4000/post", data)
    }
    

    return(
        <div className="submitdiv">
        
            <form id="create" onSubmit={logger}>

                <input name="title" id="description" placeholder="Title"></input>
                <input name="info" id="description" placeholder="Info"></input>
                <input name="username" id="description" placeholder="Username"></input>

                <button>Submit</button>



        </form>

        </div>
        
        
    )

}