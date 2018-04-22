import * as React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });

  it('should open modal on button click', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('#modal-modalBg').prop('style')).toHaveProperty(
      'display',
      'none'
    );
    wrapper.find('#demo-button').simulate('click'); // open modal
    expect(wrapper.find('#modal-modalBg').prop('style')).toHaveProperty(
      'display',
      'block'
    );
  });

  it('should have the correct package name in the demo', () => {
    const wrapper = mount(<App />);
    const packageNameRegex = /@bdenzer\/react-modal/;
    const headingText = wrapper.find('h1').text();
    const bodyText = wrapper.find('#modal-modalBody').text();
    expect(packageNameRegex.test(headingText)).toBe(true);
    expect(packageNameRegex.test(bodyText)).toBe(true);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
