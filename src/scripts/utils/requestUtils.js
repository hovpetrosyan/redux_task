export default function APIcall(fetch,url,method,data){
    fetch(url,{
        method:method,
        headers: {
            "Content-Type": "application/json"
        },
         body:JSON.stringify({data:data})
        }).then((res)=>{
            res.json().then((data)=>{
                return data;
            });
           // todo
    });
    
}


























