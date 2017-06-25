var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('Reducers' ,()=>{
  describe('searchTextReducer', ()=>{
    it('should set searchText', ()=>{
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''),df(action));

      expect(res).toEqual(action.searchText);
    });
    describe('showCompletedReducer', ()=>{
      it('should toggle showCompleted', ()=>{
        var action = {
          type: 'TOGGLE_SHOW_COMPLETED'
        };
        var res = reducers.showCompletedReducer(df(false), df(action));
        expect(res).toEqual(true);
      });

    });
    describe('todosReducer', ()=>{
      it('should add new todo', ()=>{
        var action = {
          type: 'ADD_TODO',
          todo: {
            id: 'abasd123',
            text: 'Something to do',
            completed: false,
            createdAt: 923454
          }
        };
        var res = reducers.todosReducer(df([]), df(action));
        expect(res.length).toEqual(1);
        expect(res[0]).toEqual(action.todo);
      });
      it('should update todos', ()=>{
        var todos = [
          {
            id: '1',
            text: 'Do something',
            completed: true,
            createdAt: 2345234,
            completedAt: 123124
          }

        ];
        var updates ={
          completed: false,
          completedAt: null
        };
        var action = {
          type: 'UPDATE_TODO',
          id: todos[0].id,updates
        };
        var res = reducers.todosReducer(df(todos), df(action));

        expect(res[0].completed).toEqual(updates.completed);
        expect(res[0].completedAt).toEqual(updates.completedAt);
        expect(res[0].text).toEqual(todos[0].text);

      });
      it('should add existing todos', () =>{
        var todos = [{
          id: '111',
          text: 'anything',
          completed: false,
          completetAt: undefined,
          createdAt: 33000
        }];
        var action = {
          type: 'ADD_TODOS',
          todos
        };
        var res = reducers.todosReducer(df([]), df(action));

        expect(res.length).toEqual(1);
        expect(res[0]).toEqual(todos[0]);

      });

    });
    describe('Auth Reducer', ()=>{
      it('should login and record proper uid', ()=>{

        var action = {
          type: 'LOGIN',
          uid: '123'
        };
        var res = reducers.authReducer(undefined, df(action));

        expect(res).toEqual({uid:action.uid});


      });
      it('should logout', ()=>{
        const authData = {
          uid: '123'
        }
        var action = {
          type: 'LOGOUT',
        };
        var res = reducers.authReducer(df(authData), df(action));

        expect(res).toEqual({});


      });

    });

  });

});
