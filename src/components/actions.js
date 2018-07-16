export function addTodo(text){
    return{
        type:'add_todo',
        text
    }
}
export function deleteTodo(id){
    return{
        type:'delete_todo',
        id
    }
}
export function editTodo(id,text){
    return{
        type:'edit_todo',
        id,
        text
    }
}
export function getTodo(){
    return {
        type:'get_todo'
    }
}