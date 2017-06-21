var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

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
      ],
      showCompleted: false,
      searchText:''
    };
  },
handleAddTodo: function(text) {
    alert('New Todo: '+text);
  },
handleSearch: function(showCompleted, searchText){
  this.setState({
    showCompleted: showCompleted,
    searchText: searchText.toLowerCase()
  })
},
  render: function (){
    var {todos, newTodo} = this.state;

    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onSubmit={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
