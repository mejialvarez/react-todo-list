import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = { item: '' };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.state.item);
    this.setState({item: ''});
    ReactDOM.findDOMNode(this.refs.item).focus();
    return;
  }

  onChange(e) {
    this.setState({
      item: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input type="text" className="form-control" required="true" onChange={this.onChange} value={this.state.item}/>
            <span className="input-group-btn">
              <button className="btn btn-success" type="submit">Add</button>
            </span>
          </div>
      </form>
    );
  }
}

export default TodoForm;
