import React, { Component } from 'react';
import TodoBanner from '../components/TodoBanner';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import '../css/TodoApp.css';

class TodoApp extends Component {
  constructor() {
    super();
    this.updateItems = this.updateItems.bind(this);
    this.state = { items: [] };
  }

  updateItems(newItem) {
    let allItems = this.state.items;
    allItems.unshift({ about: newItem });
    this.setState({items: allItems});
  }

  componentDidMount() {  
    fetch('https://n0t3z.herokuapp.com/api/notes')
      .then((response) => {
        return response.json()
      })
      .then((items) => {
        this.setState({ items: items })
      })
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