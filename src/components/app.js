import { connect } from "tls";
import {addTodo,getTodo,editTodo,deleteTodo} from './actions';
class App extends Component{
    render(){
        return(
            <React.Fragment>
                 <Todo addTodo={this.addTodo}/>
                 <div id='anim'>REACT</div>
                 <table>
                     <tbody>
                {this.state.todos.map(
                    (todo) => 
                    {
                        //console.log('todoid',todo._id);
                        //console.log('todotodo',todo.todo);
                        return <TodoItem key = {todo._id} todo = {todo}  deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
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
        todoArr:state.todoArr
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);