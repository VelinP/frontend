import { useEffect , useState } from "react"
import {getRows} from '../db/database'
export const Submit = () =>{
    
    const logger = (event:any):void =>{
        event.preventDefault()
        const { description } = Object.fromEntries(new FormData(event.target));
        console.log(Object.fromEntries(new FormData(event.target)))
        console.log(description)
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