import React, { Component } from 'react';
import uuid from 'uuid/v4';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


class TodoList extends Component{
  
  clickHandle = (todo) => {
    this.props.onDelete(todo)
  }
  editTodo = (todo) => {
    console.log(todo)
    this.props.editTodo(todo)
  }
  render(){
    return (
      <ul className="todoList">
        <CSSTransitionGroup  transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
          {this.props.todos.map((todo,i) => 
            
              <li key={i} className="item">
                <span>{todo.text}</span> 
                <span className="tools">
                  <button onClick={this.editTodo.bind(this,todo)} >Edit</button>
                  <button onClick={() => this.clickHandle(todo)} >&times;</button>
                </span>
              </li>
            
          )}
        </CSSTransitionGroup>
      </ul>
    )
  }
}

export default TodoList;