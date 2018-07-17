export function addTodo(text){
    //
    return (dispatch)=>{
        fetch('http://localhost:3000/api/todo',{
            method:'post',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({data:text})
            }).then((res) => {
            
            res.json().then((data)=>{
                let todo = data.data;
                console.log('in addTodo action',todo.todo);
               
                dispatch({type:'add_todo',id:todo._id,text:todo.todo});
            });
            
        });  
    }
}
export function deleteTodo(obj){
    return (dispatch)=>{
        fetch('http://localhost:3000/api/todo/'+obj._id,{
            method:'delete',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({data:obj._id})
            }).then((res) => {
            
            res.json().then((data)=>{
                console.log(data);
                let id = data.data;
                console.log('in delTodo action',id);
               
                dispatch({type:'delete_todo',id:id});
            });
            
        });  
    }
}
export function editTodo(text,id){
    console.log(text+'----------'+id);
    return (dispatch)=>{
        fetch('http://localhost:3000/api/todo/'+id,{
            method:'put',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({id:id,data:text})
            }).then((res) => {
            
            res.json().then((data)=>{
                console.log(data);
                let text = data.todo;
                let id = data._id;
                console.log('in delTodo action',id);
               
                dispatch({type:'edit_todo',id:id,text:text});
            });
            
        });  
    }
}
export function getTodo(){
    return (dispatch)=>{
        fetch('http://localhost:3000/api/todo/',{
            method:'get',
            headers: {
                "Content-Type": "application/json"
            },
            }).then((res) => {
            
            res.json().then((data)=>{
                console.log(data.data);
                //let text = data.todo;
                //let id = data._id;
                //console.log('in getTodo action',id);
               
                dispatch({type:'get_todo',data:data.data});
            });
            
        });
    }
}