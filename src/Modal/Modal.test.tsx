import * as React from 'react';
import * as enzyme from 'enzyme';
import Modal from './Modal';

describe('Modal', () => {
  let closeModal: any;
  beforeEach(() => {
    closeModal = jest.fn();
  });

  it('should render without crashing', () => {
    enzyme.shallow(<Modal closeModal={closeModal} shouldShowModal={true} />);
  });

  it('should show the title if it is given one', () => {
    const wrapper = enzyme.shallow(
      <Modal closeModal={closeModal} shouldShowModal={true} title="My Title" />
    );
    const titleText = wrapper.find('#modal-modalTitle').text();
    expect(titleText).toEqual('My Title');
  });

  it('should show body content', () => {
    const wrapper = enzyme.shallow(
      <Modal closeModal={closeModal} shouldShowModal={true}>
        Here is some body content
      </Modal>
    );
    const bodyText = wrapper.find('#modal-modalBody').text();
    expect(bodyText).toEqual('Here is some body content');
  });

  it('should call closeModal if close button is clicked', () => {
    const wrapper = enzyme.shallow(
      <Modal closeModal={closeModal} shouldShowModal={true} />
    );
    wrapper.find('#modal-closeButton').simulate('click');
    expect(closeModal).toHaveBeenCalledTimes(1);
  });

  it('should call closeModal if background is clicked', () => {
    const wrapper = enzyme.mount(
      <Modal closeModal={closeModal} shouldShowModal={true} />
    );
    wrapper.find('#modal-modalBg').simulate('click');
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});
