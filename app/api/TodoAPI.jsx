var $ = require('jquery');
module.exports ={
  setTodos: function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function(){
    var stringTodos =  localStorage.getItem('todos');
    var todos = [];
    try{
    todos= JSON.parse(stringTodos);
    }
    catch(e){

    }
    return ($.isArray(todos))? todos: [];
  },
  filterTodos: function(todos, showCompleted, searchText){
      var filteredTodos = todos;
      //Filter by showCompleted

      if (!showCompleted) {
      filteredTodos = filteredTodos.filter((todo) => {
        return !todo.completed;
      });
    }//Filter by searchText
    filteredTodos = filteredTodos.filter((todo)=>{
      if(searchText.length!==0){
        if(todo.text.toLowerCase().indexOf(searchText)>=0){
          return true;
        }
        return false;
      }
      return true;
    });

      //Sort todos with non-completed first
      filteredTodos.sort((a,b)=>{
        if(!a.completed &&b.completed){
          return -1;
        }
        else if(a.completed &&!b.completed){
          return 1;
        }
        return 0;
      });
      return filteredTodos;
  }
};
