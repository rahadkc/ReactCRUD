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
  toggleClick = (todo) => {
    this.props.onToggle(todo.id)
  }

  filterTodos(showCompleted, searchText, todos){
      let filterTodos = todos;

      //filter by show completed
      filterTodos = filterTodos.filter((todo) => {
        return !todo.completed || showCompleted
      })

      //sort by searchText
      filterTodos = filterTodos.filter((todo) => {
        let text = todo.text.toLowerCase();
        return searchText.length === 0 || todo.text.indexOf(searchText) > -1;
      })
      
      //sort todos with non-completed first
      filterTodos = filterTodos.sort((a, b) => {
        if(!a.completed && b.completed){
          return -1;
        }else if(a.completed && !b.completed){
          return 1;
        }else{
          return 0;
        }
      })

      return filterTodos;
    }

  render(){
    const {showCompleted, searchText, todos} = this.props;
    let filterTodos = this.filterTodos(showCompleted, searchText, todos);
    
    return (
      <ul className="todoList">
        <CSSTransitionGroup  transitionName="example" transitionEnterTimeout={300} transitionLeaveTimeout={700}>
          {filterTodos.map((todo,i) => 
            
              <li key={i} className="item">
                
                <span onClick={this.toggleClick.bind(null,todo)}>
                  <input type="checkbox" checked={todo.completed}/>
                  <span>{todo.text}</span>
                </span> 
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