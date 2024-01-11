
export const get = async (url:string) =>{
    try{
        const data = await fetch(url);
        const processeddata = await data.json()
        console.log(`processed data->${processeddata}`)
        return processeddata

    }catch(e){
        console.log("Server is probably offline")
    }
}

export const post = async(url:string,data:Object ) =>{
    try{
        const readydata = await fetch(url, {method:'POST', headers:{'Content-Type': "application/json"}, body: JSON.stringify(data)})
        return readydata.json()
    }
    catch(e:any){
        console.log(e.message)
    }
}