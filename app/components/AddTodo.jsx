var React = require('react');

var AddTodo = React.createClass({
  propTypes: {
    onSubmit: React.PropTypes.func.isRequired
  },

  handleClick: function(e){
    e.preventDefault();
    var todo = this.refs.todo.value;
    if(todo.length>0){
      this.refs.todo.value = '';
   this.props.onSubmit(todo);

    }
    else{
      this.refs.todo.focus();
    }
  },
  render: function(){
      return(
      <div>
        <form ref="form" onSubmit ={this.handleClick} className="countdown-form">
          <input type="text" ref="todo" placeholder="What do you need to do?"/>
          <button className="button expanded" onClick={this.handleClick}>Add Todo</button>
        </form>
      </div>
    );
  }

});

module.exports = AddTodo;
