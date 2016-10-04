import React, { Component } from 'react';
import '../css/TodoListItem.css';

class TodoListItem extends Component {
  render() {
    return <li className="item">{this.props.children}</li>;
  }
}

export default TodoListItem;