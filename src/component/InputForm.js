import React, { Component } from 'react';

class InputForm extends Component{

  onSubmit=(e)=>{
    e.preventDefault();
    let text = this.refs.text.value;
    if(!text){
      alert("pls enter a value");
      return;
    }
    if(this.props.isEdit){
      console.log("update data")
      let updateTodo = {
        id: this.props.isEdit,
        text: text,
        completed: this.props.showCompleted
      }
      this.props.onTodoUpdate(updateTodo)
    }else{
      this.props.onTodoAdd(text);
    }
 
  }

  onChange = (e) => {
    console.log(e.target.value);
    this.props.changeText(e.target.value);
  }

  onSearch = (e) => {
    console.log(e.target.value);
    this.props.searchText(e.target.value);
  }

  editComplete = () => {
    this.props.editDone(this.props.isEdit)
  }


  render() {
    return(
      <div className={"formWrapper " + (this.props.isEdit ? "editing" : "")}>
        <form onSubmit={this.onSubmit} >
          <input type="text" ref="text"  value={this.props.text} onChange={this.onChange} className="inputField" placeholder={this.props.isEdit ? "" : "Add Todo..."}/>
        </form>
          <input type="text" onChange={this.onSearch} className="inputField" placeholder="Search here"/>
        <div onClick={this.props.handleCompleted} className="showComplete"><input type="checkbox" checked={this.props.showCompleted}/>show completed</div>
        {this.props.isEdit ? <button onClick={this.editComplete} className="editCancel">Cancel</button> : ""}
      </div>
    )
  }
}

export default InputForm;