export const get = async (url:string) =>{
    try{
        const data = await fetch(url);
        const processeddata = await data.json()
        return processeddata

    }catch(e){
        console.log("Server is probably offline")
    }
}