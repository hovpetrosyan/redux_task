export default function todoReducer(state=[],action){
    switch(action.type){
        case 'add_todo':
            return {todos:[...state.todos,
                {
                  _id: action.id,
                  todo: action.text
                }
              ]}
        case 'delete_todo':
            return {todos:state.todos.filter((el)=>{return el._id != action.id})}
        case 'edit_todo':
            return {todos:state.todos.map((el)=>{if(el._id == action.id){el.todo=action.text}return el})}
        case 'get_todo':
              return {todos:action.data}
        default:
              return state;
    }
}