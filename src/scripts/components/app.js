import { connect } from "react-redux";
import {TodoItem} from './components/todoitem';
import {Todo} from './components/todo';

class App extends Component{
    render(){
        return(
            <React.Fragment>
                 <Todo addTodo={this.props.addTodo}/>
                 <div id='anim'>REACT</div>
                 <table>
                     <tbody>
                {this.props.todos.map(
                    (todo) => 
                    {
                        //console.log('todoid',todo._id);
                        //console.log('todotodo',todo.todo);
                        return <TodoItem key = {todo._id} todo = {todo}  deleteTodo={this.props.deleteTodo} editTodo={this.props.editTodo} />
                    })
                } 
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state =>{
    return {
        todos:state.todosArr
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        addTodo:dispatch(addTodo),
        getTodo:dispatch(getTodo),
        editTodo:dispatch(editTodo),
        deleteTodo:dispatch(deleteTodo)
    }
}


const App = connect(mapStateToProps,mapDispatchToProps)(App);
export default App;