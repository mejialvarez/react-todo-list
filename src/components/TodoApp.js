import React, { Component } from 'react';
import request from 'superagent';
import TodoBanner from '../components/TodoBanner';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import '../css/TodoApp.css';

class TodoApp extends Component {
  constructor() {
    super();
    this.updateItems = this.updateItems.bind(this);
    this.state = { items: [] };
  }

  updateItems(newItem) {
    request
    .post('https://n0t3z.herokuapp.com/api/notes/new')
    .send({ about: newItem })
    .end((err, res) => {
      if (err) {
        console.log("Error: " + err);
        return;
      }

      let allItems = this.state.items;
      allItems.unshift({ about: newItem });
      this.setState({items: allItems});
    });
  }

  componentWillMount() {  
    request
    .get('https://n0t3z.herokuapp.com/api/notes')
    .end((err, res) => {
     if (err) {
      console.log("Error: " + err);
      return;
      }
      this.setState({ items: res.body.slice(0).reverse() });
    });
  }

  render() {
    return (
      <div className="todo-app">
        <TodoBanner/>
        <TodoForm onFormSubmit={this.updateItems}/>
        <TodoList items={this.state.items}/>
      </div>
    );
  }
}

export default TodoApp;