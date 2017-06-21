var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
        id: 1,
        text: 'Walk the dog'
        },{
        id: 2,
        text: 'Clean the yard'
        },{
        id: 3,
        text: 'Take out the trash'
        },{
        id: 4,
        text: 'Take online course'
        }
      ]
    };
  },
handleAddTodo: function(text) {
    alert('New Todo: '+text);
  },

  render: function (){
    var {todos, newTodo} = this.state;

    return(
      <div>
        <TodoList todos={todos}/>
        <AddTodo onSubmit={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
