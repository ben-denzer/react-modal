import * as React from 'react';
import Modal, { ICustomModalStyle } from '../../src/Modal/Modal';
const bgImage = require('../img/lightBg.jpg');
const reactLogo = require('../img/react.png');

interface IAppState {
  customizedModal: boolean;
  shouldShowModal: boolean;
}

const mainDivStyle: React.CSSProperties = {
  textAlign: 'center',
  fontFamily: 'Arial, Helvetica, sans-serif'
};

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      customizedModal: false,
      shouldShowModal: false
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal(): void {
    this.setState({ shouldShowModal: false, customizedModal: false });
  }

  openModal(e: React.MouseEvent<HTMLElement>): void {
    const { id } = e.target as HTMLElement;
    if (id && id === 'customizedModal') {
      this.setState({ customizedModal: true });
    }
    this.setState({ shouldShowModal: true });
  }

  render(): JSX.Element {
    const customStyle: ICustomModalStyle = {
      modalHeader: {
        backgroundColor: 'blue',
        color: 'white'
      },
      modalTitle: {
        fontSize: '25px',
        fontWeight: 'lighter'
      },
      closeButtonHover: {
        background: 'darkBlue'
      },
      closeButtonText: {
        color: 'white',
        transition: 'all 1s ease'
      },
      hoveredButtonText: {
        transform: 'rotate(0.9turn)'
      },
      modalBody: {
        backgroundImage: `url(${bgImage})`,
        textAlign: 'center',
        fontSize: '18px'
      }
    };
    const modalStyle = this.state.customizedModal ? customStyle : {};
    return (
      <React.Fragment>
        <Modal
          closeModal={this.closeModal}
          customStyle={modalStyle}
          shouldShowModal={this.state.shouldShowModal}
          title="Modal Demo"
        >
          <div>
            This is @bdenzer/react-modal. You can put any React Component in
            this body section.
          </div>
          {this.state.customizedModal && (
            <React.Fragment>
              <img
                style={{ margin: '20px auto' }}
                src={reactLogo}
                alt="React Logo"
              />
              <div>
                <strong>
                  Hover over the close button at the top right of the modal
                </strong>
              </div>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>

              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </React.Fragment>
          )}
        </Modal>
        <div style={mainDivStyle}>
          <h1>@bdenzer/react-modal Demo</h1>
          <p>The default styles are made to look like Bootstrap's modal</p>
          <button id="demo-button" onClick={this.openModal}>
            Open Default Modal
          </button>
          <p>
            But you can easily customize just about everything about it. Here is
            an example of some of the things you could do.
          </p>
          <button id="customizedModal" onClick={this.openModal}>
            Open Customized Modal
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
