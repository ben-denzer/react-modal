import * as React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });

  it('should open modal on button click', async () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('#modal-modalBg').prop('style')).toHaveProperty(
      'display',
      'none'
    );

    // open modal
    wrapper.find('#demo-button').simulate('click');

    expect(wrapper.find('#modal-modalBg').prop('style')).toHaveProperty(
      'display',
      'block'
    );
  });
});
