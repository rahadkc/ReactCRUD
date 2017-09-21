import React, { Component } from 'react';
import uuid from 'uuid/v4';
import InputForm from './component/InputForm';
import TodoList from './component/TodoList';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      showCompleted: false,
      searchText: '',
      text: '',
      todos: [],
      isEdit: 0,
      todos: [
        {
          id: uuid(),
          text: "name 1",
          completed: false
        },
        {
          id: uuid(),
          text: "name 2",
          completed: true
        },
        {
          id: uuid(),
          text: "name 3",
          completed: false
        }
      ]
    }
  }
  handleTodoAdd = (text) => {
    let newTodo = {
      id: uuid(),
      text: text,
      completed: false
    }
    let todos = this.state.todos;
    todos.unshift(newTodo)
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

handleToggle = (id) => {
  console.log(id, " toggle")
  let todos = this.state.todos;
  todos.map((todo) => {
    todo.id === id ? todo.completed = !todo.completed : todo
  })
  this.setState({
    todos: todos
  })
  
  
}

searchText = (v) => {
  this.setState({
    searchText: v
  })
}

handleShowCompleted = () => {
  let showToggle = !this.state.showCompleted;
  this.setState({
    showCompleted: showToggle
  })
}

  render() {
    return (
      <div className="app">
        <h1>Add Todo</h1>
        <h4>You can Add , delete and Edit data </h4>
        <InputForm
        text={this.state.text}
        showCompleted={this.state.showCompleted}
        handleCompleted={this.handleShowCompleted}
        changeText={this.handleChangeText}
        searchText={this.searchText}
        onTodoUpdate={this.handleUpdate}
        isEdit={this.state.isEdit}
        editDone={this.handleDone}
        onTodoAdd={this.handleTodoAdd}/>

        <TodoList 
        showCompleted={this.state.showCompleted}
        searchText={this.state.searchText}
        onToggle={this.handleToggle}
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


