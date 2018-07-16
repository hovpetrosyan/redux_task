import React from "react";
import {createStore,applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import mainReducer from './reducers/todoReducer';
import App from './components/app';
import thunk from 'redux-thunk'; // for action creator's.... to be able return both function and object;
import {addTodo,getTodo,editTodo,deleteTodo} from './actions';

const initialState = {
    todosArr:[]
}
const store = createStore(mainReducer,initialState,applyMiddleware(thunk));

render(
<Provider store={store}>
    <App />
</Provider>,document.getElementById('root'));


