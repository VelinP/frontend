interface data{
    xd:string,
}

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