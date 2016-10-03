import React, { Component } from 'react';

class TodoListItem extends Component {
  render() {
    return (<li>{this.props.children}</li>);
  }
}

export default TodoListItem;
