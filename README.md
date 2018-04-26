# @bdenzer/react-modal

## Simple Modal Component For React

### Styled by default to look like Bootstrap's Modal, but it is highly customizable.

### Installation

`yarn add @bdenzer/react-modal`\
or\
`npm install @bdenzer/react-modal --save`

### [See The Demo Here](https://react-modal.bdenzer.com)

### Getting Started

It is best practice to put a modal component at the 'top level'. In React 16.2+ this is even easier using `React.Fragment`. This advice is not specific to a particular component - nesting a modal inside an element that has it's CSS `position` set will cause it to render in the wrong place.

**Required Props**

* shouldShowModal: boolean
* closeModal: function

**Optional Props**

* title: string
* customStyle - object containing JS style objects - see 'Adding Custom Styles' Demo below
* onlyCloseWithButton: boolean - by default the modal will close if you click outside of the main modal area, use `onlyCloseWithButton` to remove this behavior

### Minimal Example ---- ( [TypeScript Example Here](https://github.com/ben-denzer/react-modal#example---adding-custom-styles-in-typescript) )

```
  import React, { Component } from 'react';
  import Modal from '@bdenzer/react-modal';

  export default class App extends Component {
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

### Customizing The Styles

Every element in the modal has it's own `id` so you can use Styled Components, Emotion, SCSS, LESS, CSS... Or you can set the `customStyle` prop with a JS style object (<React.CSSProperties> in TypeScript).

<!-- prettier-ignore-start -->
Here is a full list of the style options

| customStyle prop          | CSS ID                              | Description                                |
| ------------------------- | ----------------------------------- | ------------------------------------------ |
| animationTime: **number**(ms) | set in `customStyle` prop       | setting it via CSS will be a headache      |
| closeButton               | #modal-closeButton                  | square box in top right corner             |
| closeButtonHover          | #modal-closeButton:hover            | hovered state of the close button          |
| closeButtonText           | #modal-closeButtonText              | the 'X' inside the close button            |
| hoveredButtonText         | #modal-closeButton:hover #modal-closeButtonText | the 'X' while the outer button is hovered |
| modalBackground           | #modal-modalBackground              | the outer, semi-transparent section        |
| modalBackgroundOpen       | #modal-modalBackground.open         | final position of _open_ animation         |
| modalBackgroundTransition | #modal-modalBackground.transition   | starting point of _open_ animation         |
| modalBody                 | #modal-modalBody                    | _under_ the modalHeader                    |
| modalHeader               | #modal-modalHeader                  | top row, the title and closeButton         |
| modalInner                | #modal-modalInner                   | modalHeader + modalBody (everything that is not modalBackground) |
| modalTitle                | #modal-modalTitle                   | text in the top left of the modal          |
<!-- prettier-ignore-end -->

Scroll down to see styling examples, and you can also see a more complicated example that I used in the Demo - [Code](https://github.com/ben-denzer/react-modal/blob/master/demo/components/App.tsx#L38) - [Demo](https://react-modal.bdenzer.com)

**Removing Animation**\
Setting `animationTime` to 0 will make the modal show without animating in/out.

### Example - Adding Custom Styles in JS

```
  import React, { Component } from 'react';
  import Modal from '@bdenzer/react-modal';

  export default class App extends Component {
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
        animationTime: 400,
        modalHeader: {
          backgroundColor: 'green'
        },
        modalTitle: {
          color: 'white'
        },
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

**Import `{ ICustomModalStyle }` to make your life easier**

```
  import * as React from 'react';

  import Modal, { ICustomModalStyle } from '@bdenzer/react-modal';

  interface IAppState {
    shouldShowModal: boolean;
  }

  export default class App extends React.Component<{}, IAppState> {
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
        animationTime: 400,
        closeButtonText: {
          color: 'white'
        },
        hoveredButtonText: {
          fontWeight: 'bold'
        },
        modalHeader: {
          backgroundColor: 'green'
        },
        modalTitle: {
          color: 'white'
        }
      };
      return (
        <div>
          <Modal
            closeModal={this.closeModal}
            customStyle={modalStyle}
            shouldShowModal={this.state.shouldShowModal}
            title="React Modal in TypeScript"
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

### Contributing

There are basically 2 projects inside the repo - the Modal Component _(./src/Modal)_ and the Demo _(./demo)_. Only the Modal gets published to NPM but the demo is where you'll test any changes that you make.

* `yarn start` - build / serve the demo, default is `http://localhost:3000` but check your console output if you are already using port 3000.
* `yarn test` - run tests
* `yarn test:watch` - run tests on save

Add tests if you are changing any functionality.

### Known Issues

**yarn test:watch throws ENOSPC error on Linux**

If you run into this issue, you'll need to increase the number of 'watchers' on your system. Run `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p` to fix. (From [this issue](https://github.com/facebook/jest/issues/3254) in the Jest repository.)
