import * as React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

const closeModal = jest.fn();

describe('Modal', () => {
  it('should render without crashing', () => {
    shallow(
      <Modal shouldShowModal={true} closeModal={closeModal} title="Title" />
    );
  });
});
