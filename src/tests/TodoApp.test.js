import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import nock from 'nock';
import TodoApp from '../components/TodoApp';

describe('<TodoApp/>',() => {
  it('Updates the state after AJAX call in `componentWillMount` was made', (done) => {
    nock('https://n0t3z.herokuapp.com')
      .get('/api/notes')
      .reply(200, [{ 'title': 'Reign' }, { 'title': 'Reign' }]);

    const wrapper = mount(<TodoApp />);
    setTimeout(function() {
      expect(wrapper.state().items.length).toEqual(2);
      nock.cleanAll();
      done();
    }, 1500);
  });
});