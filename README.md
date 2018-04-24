# @bdenzer/react-modal

## Simple Modal Component For React

### Styled by default to look like Bootstrap's Modal, but it is highly customizable.

**Required Props**

* shouldShowModal: boolean
* closeModal: function

**Optional Props**

* title: string
* customStyle - object containing JS style objects - see 'Adding Custom Styles' Demo below

### Example: Simple Usage In JS

```
  import React, { Component } from 'react';
  import Modal from '@bdenzer/react-modal';

  export default Class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        shouldShowModal: false
      }
      this.closeModal = this.closeModal.bind(this);
      this.openModal = this.openModal.bind(this);
    }

    closeModal() {
      this.setState({ shouldShowModal: false });
    }

    openModal() {
      this.setState({ shouldShowModal: true });
    }

    render() {
      return (
        <div>
          <Modal
            closeModal={this.closeModal}
            shouldShowModal={this.state.shouldShowModal}
          >
            This is some text inside the modal
          </Modal>
          <button onClick={this.openModal}>Open Modal</button>
        </div>
      );
    }
  }
```

### Example: Simple Usage in TypeScript

```
  import * as React from 'react';
  import Modal from '@bdenzer/react-modal';

  interface IAppState {
    shouldShowModal: true;
  }

  export default Class App extends React.Component<{}, IAppState> {
    constructor(props: {}) {
      super(props);
      this.state = {
        shouldShowModal: false
      }
      this.closeModal = this.closeModal.bind(this);
      this.openModal = this.openModal.bind(this);
    }

    public render(): JSX.Element {
      return (
        <div>
          <Modal
            closeModal={this.closeModal}
            shouldShowModal={this.state.shouldShowModal}
          >
            This is some text inside the modal
          </Modal>
          <button onClick={this.openModal}>Open Modal</button>
        </div>
      );
    }

    private closeModal(): void {
      this.setState({ shouldShowModal: false });
    }

    private openModal(): void {
      this.setState({ shouldShowModal: true });
    }
  }
```

### Customizing The Styles

Every element in the modal has it's own `id` so you can use Styled Components, Emotion, SCSS, LESS, CSS... Or you can set the `customStyle` prop with a JS style object (<React.CSSProperties> in TypeScript).

Here is a full list of the style options

* animationTime: number - should be set in `customStyle` prop, setting it via CSS will be a headache
* closeButton (#modal-closeButton)
* closeButtonHover (#modal-closeButton:hover)
* closeButtonText (#modal-closeButtonText)
* hoveredButtonText (#modal-closeButton:hover #modal-closeButtonText)
* modalBackground (#modal-modalBackground)
* modalBackgroundOpen (#modal-modalBackground.open) - Final position of _open_ animation
* modalBackgroundTransition (#modal-modalBackground.transition) - Starting point of _open_ animation
* modalBody (#modal-modalBody) - the part of the modal _under_ the modalHeader
* modalHeader (#modal-modalHeader)
* modalInner (#modal-modalInner) - The whole modal wrapping modalHeader and modalBody
* modalTitle (#modal-modalTitle)

### Example - Adding Custom Styles in JS

```
  import React, { Component } from 'react';
  import Modal from '@bdenzer/react-modal';

  export default Class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        shouldShowModal: false
      }
      this.closeModal = this.closeModal.bind(this);
      this.openModal = this.openModal.bind(this);
    }

    closeModal() {
      this.setState({ shouldShowModal: false });
    }

    openModal() {
      this.setState({ shouldShowModal: true });
    }

    render() {
      const modalStyle = {
        modalHeader: {
          backgroundColor: 'green'
        },
        modalTitle: {
          color: 'white'
        }
        closeButtonText: {
          color: 'white'
        },
        hoveredButtonText: {
          fontWeight: 'bold'
        }
      };

      return (
        <div>
          <Modal
            closeModal={this.closeModal}
            customStyle={modalStyle}
            shouldShowModal={this.state.shouldShowModal}
            title="Demo Modal"
          >
            This is some text inside the modal
          </Modal>
          <button onClick={this.openModal}>Open Modal</button>
        </div>
      );
    }
  }
```

### Example - Adding Custom Styles in TypeScript

```
  import * as React from 'react';
  import Modal, { ICustomModalStyle } from '@bdenzer/react-modal';

  interface IAppState {
    shouldShowModal: true;
  }

  export default Class App extends React.Component<{}, IAppState> {
    constructor(props: {}) {
      super(props);
      this.state = {
        shouldShowModal: false
      }
      this.closeModal = this.closeModal.bind(this);
      this.openModal = this.openModal.bind(this);
    }

    public render(): JSX.Element {
      const modalStyle: ICustomModalStyle = {
        modalHeader: {
          backgroundColor: 'green'
        },
        modalTitle: {
          color: 'white'
        }
        closeButtonText: {
          color: 'white'
        },
        hoveredButtonText: {
          fontWeight: 'bold'
        }
      };
      return (
        <div>
          <Modal
            closeModal={this.closeModal}
            shouldShowModal={this.state.shouldShowModal}
          >
            This is some text inside the modal
          </Modal>
          <button onClick={this.openModal}>Open Modal</button>
        </div>
      );
    }

    private closeModal(): void {
      this.setState({ shouldShowModal: false });
    }

    private openModal(): void {
      this.setState({ shouldShowModal: true });
    }
  }
```

### Known Issues

**yarn test:watch throws ENOSPC error on Linux**

This issue is that you have to increase the number of 'watchers' on your system. Run `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p` to fix. (From [this issue](https://github.com/facebook/jest/issues/3254) in the Jest repository.)
