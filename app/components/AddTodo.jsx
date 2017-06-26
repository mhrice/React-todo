import React from 'react';
import { PropTypes } from 'react'
import {connect} from 'react-redux';
import * as actions from 'actions';



export class AddTodo extends React.Component {

  constructor(props){
    super(props);
  this.handleClick =  this.handleClick.bind(this);

  }

  handleClick(e){
    var {dispatch} = this.props;
    e.preventDefault();
    var todo = this.refs.todo.value;
    if(todo.length>0){
      this.refs.todo.value = '';
      dispatch(actions.startAddTodo(todo));
    }
    else{
      this.refs.todo.focus();
    }
  };

  render(){
      return(
      <div className="container__footer">
        <form ref="form" onSubmit ={this.handleClick} className="countdown-form">
          <input type="text" ref="todo" placeholder="What do you need to do?"/>
          <button className="button expanded" onClick={this.handleClick}>Add Todo</button>
        </form>
      </div>
    );
  };

};

export default connect(

)(AddTodo);
