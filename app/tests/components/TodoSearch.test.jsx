var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {TodoSearch} from 'TodoSearch'

describe('TodoSearch', () => {
  it('should exist', () =>{
    expect(TodoSearch).toExist();
  });
  it('should dispatch SET_SEARCH_TEXT on input change', ()=>{
    var searchText = 'Dog';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>)

    todoSearch.refs.searchText.value = searchText;

    TestUtils.Simulate.change(todoSearch.refs.searchText);
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    }

    expect(spy).toHaveBeenCalledWith(action);
  });
  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', ()=>{
    var checkedValue = true;
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>)

    todoSearch.refs.showCompleted.checked = checkedValue;

    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
  var  action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };

    expect(spy).toHaveBeenCalledWith(action);
  });
});
