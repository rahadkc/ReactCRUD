import React, { Component } from 'react';
import uuid from 'uuid/v4';
import InputForm from './component/InputForm';
import TodoList from './component/TodoList';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
      todos: [],
      isEdit: 0
    }
  }
  handleTodoAdd = (text) => {
    let newTodo = {
      id: uuid(),
      text: text
    }
    let todos = this.state.todos;
    todos.push(newTodo)
    this.setState({
      todos: todos,
      text: ''
    })
  }

  handleDelete = (todo) => {
    let todos = this.state.todos;
    let index = todos.indexOf(todo);
    todos.splice(index, 1);
    this.setState({
      todos: todos
    }) 
  }


//update function

 handleTodoEdit = (todo) => {
   this.setState({
    text: todo.text,
    isEdit: todo.id
   })
 }

 handleChangeText = (text) => {
   this.setState({
     text:text
   })
 }
handleDone = (edit) => {
  if(edit){
    this.setState({
      isEdit: 0,
      text: ''
    })
  }
 }
handleUpdate = (newTodo) => {
  let todos = this.state.todos;
  todos.map((todo,i) => {
    if(todo.id === newTodo.id){
      todos.splice(i,1,newTodo)
    } 
  })
  this.setState({
    todos: todos
  }) 
}

  render() {
    return (
      <div className="app">
        <h1>Add Todo</h1>
        <h4>You can Add , delete and Edit data </h4>
        <InputForm
        text={this.state.text}
        changeText={this.handleChangeText}
        onTodoUpdate={this.handleUpdate}
        isEdit={this.state.isEdit}
        editDone={this.handleDone}
        onTodoAdd={this.handleTodoAdd}/>

        <TodoList 
        editTodo={this.handleTodoEdit}
        isEdit={this.state.isEdit}
        todos={this.state.todos} 
        onDelete={this.handleDelete}
        />
      </div>
    );
  }
}



export default App;


