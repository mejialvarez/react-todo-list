import React, { Component } from 'react';
import TodoListItem from '../components/TodoListItem';
import '../css/TodoListItem.css'

class TodoList extends Component {
  render() {
      if (this.props.items.length > 0) {
        return (
          <ul className="todo-list-item">
            {
              this.props.items.map((itemText) => {
                return <TodoListItem>{itemText.about}</TodoListItem>
              })
            }
          </ul>
        );
      } else {
        return <ul className="todo-list-item"><li>Cargando...</li></ul>
      }
  }
}

export default TodoList;
