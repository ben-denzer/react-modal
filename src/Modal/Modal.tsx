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

interface IModalProps {
  shouldShowModal: boolean;
  style?: React.CSSProperties;
  title?: string;
  closeModal(): void;
}

interface IModalState {
  buttonIsHovered: boolean;
  modalClassName: '' | 'open' | 'transition';
}

class Modal extends React.Component<IModalProps, IModalState> {
  public static defaultProps: Partial<IModalProps> = {
    style: {}
  };
  constructor(props: IModalProps) {
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

  componentDidUpdate(prevProps: IModalProps): void {
    const nextModalState: boolean = this.props.shouldShowModal;
    if (prevProps.shouldShowModal !== nextModalState) {
      this.toggleModalClass(nextModalState);
    }
  }

  buttonMouseOut(): void {
    this.setState({ buttonIsHovered: false });
  }

  closeOnBgClick(e: React.MouseEvent<HTMLElement>): void {
    const { id } = e.target as HTMLElement;
    if (!id || id !== 'modal-modalBg') {
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
    return { ...modalBackground, ...defaultOverrides, ...this.props.style };
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
        id="modal-modalBg"
        onClick={this.closeOnBgClick}
      >
        <div id="modal-modalInner" style={modalInner}>
          <div id="modal-modalHeader" style={modalHeader}>
            <div id="modal-modalTitle">{this.props.title}</div>
            <div
              id="modal-closeButton"
              onClick={this.props.closeModal}
              onMouseOut={this.buttonMouseOut}
              onMouseOver={this.mouseOverButton}
              style={this.calculateButtonStyle()}
            >
              X
            </div>
          </div>
          <div id="modal-modalBody" style={modalBody}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
