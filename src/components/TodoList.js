import React, { Component } from 'react';
import TodoListItem from '../components/TodoListItem';
import '../css/TodoList.css'

class TodoList extends Component {
  render() {
    if (this.props.items.length > 0) {
      return (
        <ul className="todo-list list-unstyled">
          {
            this.props.items.map((itemText, index) => {
              return <TodoListItem key={index}>{itemText.about}</TodoListItem>;
            })
          }
        </ul>
      );
    } else {
      return (
        <ul className="todo-list list-unstyled">
          <li>Cargando...</li>
        </ul>
      );
    }
  }
}

export default TodoList;
