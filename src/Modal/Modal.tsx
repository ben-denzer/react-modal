import * as React from 'react';
import {
  closeButton,
  modalAnimationTime,
  modalBody,
  modalBackground,
  modalBackgroundOpen,
  modalBackgroundTransition,
  modalHeader,
  modalInner
} from './ModalStyles';

interface Props {
  shouldShowModal: boolean;
  title: string;
  closeModal(): void;
}

interface State {
  buttonIsHovered: boolean;
  modalClassName: '' | 'open' | 'transition';
}

class Modal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      buttonIsHovered: false,
      modalClassName: ''
    };
    this.buttonMouseOut = this.buttonMouseOut.bind(this);
    this.closeOnBgClick = this.closeOnBgClick.bind(this);
    this.mouseOverButton = this.mouseOverButton.bind(this);
    this.toggleModalClass = this.toggleModalClass.bind(this);
  }

  componentDidUpdate(prevProps: Props): void {
    const nextModalState: boolean = this.props.shouldShowModal;
    if (prevProps.shouldShowModal !== nextModalState) {
      this.toggleModalClass(nextModalState);
    }
  }

  buttonMouseOut(): void {
    this.setState({ buttonIsHovered: false });
  }

  closeOnBgClick(e: React.MouseEvent<HTMLElement>): void {
    const { dataset } = e.target as HTMLElement;
    if (!dataset.targetId || dataset.targetId !== 'modalBg') {
      return;
    }
    this.props.closeModal();
  }

  calculateBgStyle(): React.CSSProperties {
    const { modalClassName } = this.state;
    const styleMap = {
      open: modalBackgroundOpen,
      transition: modalBackgroundTransition
    };
    const defaultOverrides = styleMap[modalClassName] || {};
    return { ...modalBackground, ...defaultOverrides };
  }

  calculateButtonStyle(): React.CSSProperties {
    const { buttonIsHovered } = this.state;
    const hoverStyle: React.CSSProperties = {
      cursor: 'pointer',
      color: '#222'
    };
    return buttonIsHovered ? { ...closeButton, ...hoverStyle } : closeButton;
  }

  mouseOverButton(): void {
    this.setState({ buttonIsHovered: true });
  }

  toggleModalClass(shouldShowModal: boolean): void {
    this.setState({ modalClassName: 'transition' });
    const minUpdateTime = 17;
    const nextClass = shouldShowModal ? 'open' : '';
    const timer: number = shouldShowModal ? minUpdateTime : modalAnimationTime;
    setTimeout(() => this.setState({ modalClassName: nextClass }), timer);
  }

  render(): JSX.Element {
    return (
      <div
        style={this.calculateBgStyle()}
        data-target-id="modalBg"
        onClick={this.closeOnBgClick}
      >
        <div style={modalInner}>
          <div style={modalHeader}>
            <div>{this.props.title}</div>
            <div
              onClick={this.props.closeModal}
              onMouseOut={this.buttonMouseOut}
              onMouseOver={this.mouseOverButton}
              style={this.calculateButtonStyle()}
            >
              X
            </div>
          </div>
          <div style={modalBody}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
