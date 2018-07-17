import { connect } from "react-redux";
import {TodoItem} from './todoitem';
import {Todo} from './todoadd';
import {Component} from 'react';
import {bindActionCreators} from 'redux';
import {addTodo,getTodo,editTodo,deleteTodo} from './actions';
import React from "react";
class App extends Component{
    componentDidMount(){
        this.props.getTodo();
       //this.props.getTodo() 
    }
    render(){
        return(
            <React.Fragment>
                 <Todo addTodo={this.props.addTodo}/>
                 <div id='anim'>REACT</div>
                 <table>
                     <tbody>
                         {console.log('in App',this.props.todos)}
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
        todos:state.todos
    }
}
const mapDispatchToProps = dispatch => { 
    return {
        addTodo:bindActionCreators(addTodo,dispatch),
        getTodo:bindActionCreators(getTodo,dispatch),
        editTodo:bindActionCreators(editTodo,dispatch),
        deleteTodo:bindActionCreators(deleteTodo,dispatch)
    }
}


const expApp = connect(mapStateToProps,mapDispatchToProps)(App);
export default expApp;