var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleClick: function(e){
    var {dispatch} = this.props
    e.preventDefault();
    var todo = this.refs.todo.value;
    if(todo.length>0){
      this.refs.todo.value = '';
      dispatch(actions.startAddTodo(todo));
    }
    else{
      this.refs.todo.focus();
    }
  },
  render: function(){
      return(
      <div className="container__footer">
        <form ref="form" onSubmit ={this.handleClick} className="countdown-form">
          <input type="text" ref="todo" placeholder="What do you need to do?"/>
          <button className="button expanded" onClick={this.handleClick}>Add Todo</button>
        </form>
      </div>
    );
  }

});

export default connect()(AddTodo);
