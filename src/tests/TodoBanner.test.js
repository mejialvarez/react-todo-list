import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TodoBanner from '../components/TodoBanner';

describe('<TodoBanner/>', () => {
  it('renders banner', () => {
    const wrapper = shallow(<TodoBanner/>);
    const title = <h1 className="banner">Todo List</h1>;
    expect(wrapper.contains(title)).toEqual(true);
  });
});