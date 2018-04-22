import * as React from 'react';
import * as enzyme from 'enzyme';
import Modal from './Modal';

describe('Modal', () => {
  let closeModal: any;
  beforeEach(() => {
    closeModal = jest.fn();
  });

  it('should render without crashing', () => {
    enzyme.shallow(<Modal shouldShowModal={true} closeModal={closeModal} />);
  });
});
