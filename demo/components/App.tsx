import * as React from 'react';
import Modal from '../../src/Modal/Modal';

interface IAppState {
  shouldShowModal: boolean;
}

const mainDivStyle: React.CSSProperties = {
  textAlign: 'center'
};

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      shouldShowModal: false
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  closeModal(): void {
    this.setState({ shouldShowModal: false });
  }
  openModal(): void {
    this.setState({ shouldShowModal: true });
  }
  render(): JSX.Element {
    return (
      <React.Fragment>
        <Modal
          closeModal={this.closeModal}
          shouldShowModal={this.state.shouldShowModal}
          title="Modal Demo"
        >
          <div>
            This is @bdenzer/react-modal. You can put any React Component in
            this body section.
          </div>
        </Modal>
        <div style={mainDivStyle}>
          <h1>@bdenzer/react-modal Demo</h1>
          <button onClick={this.openModal}>Open Modal</button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
