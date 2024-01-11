import { useEffect , useState } from "react"
import * as requester from '../util/requester'

export const Submit = () =>{
    const [items,setitems] = useState([])
   
    useEffect(()=> {requester.get("http://localhost:4000/").then((data) => {setitems(data)})},[])


    const logger = (event:any):void =>{
        event.preventDefault()
        const { title , info , username } = Object.fromEntries(new FormData(event.target));
        console.log(Object.fromEntries(new FormData(event.target)))
        console.log(title , info , username)
        console.log(items)
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