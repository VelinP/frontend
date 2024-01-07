import { useEffect , useState } from "react"
import * as requester from '../util/requester'

export const Submit = () =>{
    const [items,setitems] = useState([])
   
    useEffect(()=> {requester.get("http://localhost:4000/").then((data) => {setitems(data)})},[])


    const logger = (event:any):void =>{
        event.preventDefault()
        const { description } = Object.fromEntries(new FormData(event.target));
        console.log(Object.fromEntries(new FormData(event.target)))
        console.log(description)
        console.log(items)
    }
    

    return(
        <div className="submitdiv">
        
            <form id="create" onSubmit={logger}>
                <button>Submit</button>

                <textarea name="description" id="description" placeholder="Describe your offer...">
            </textarea>

        </form>

        </div>
        
        
    )

}