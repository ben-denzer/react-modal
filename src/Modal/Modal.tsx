import * as React from 'react';
import { ICustomModalStyle, IModalStyle, modalStyle } from './ModalStyles';

interface IModalProps {
  shouldShowModal: boolean;
  customStyle?: ICustomModalStyle;
  onlyCloseWithButton?: boolean;
  title?: string;
  closeModal(): void;
}

interface IModalState {
  modalAnimationTime: number;
  buttonIsHovered: boolean;
  modalClassName: '' | 'open' | 'transition';
}

class Modal extends React.Component<IModalProps, IModalState> {
  public static defaultProps: Partial<IModalProps> = {
    customStyle: {}
  };
  constructor(props: IModalProps) {
    super(props);
    this.state = {
      modalAnimationTime: this.setAnimationTime(),
      buttonIsHovered: false,
      modalClassName: ''
    };
    this.buttonMouseOut = this.buttonMouseOut.bind(this);
    this.closeOnBgClick = this.closeOnBgClick.bind(this);
    this.mouseOverButton = this.mouseOverButton.bind(this);
    this.setAnimationTime = this.setAnimationTime.bind(this);
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
    const { onlyCloseWithButton } = this.props;
    const { id } = e.target as HTMLElement;
    if (onlyCloseWithButton || !id || id !== 'modal-modalBackground') {
      return;
    }
    this.props.closeModal();
  }

  calculateBgStyle(
    modalBackground: React.CSSProperties,
    modalBackgroundOpen: React.CSSProperties,
    modalBackgroundTransition: React.CSSProperties
  ): React.CSSProperties {
    const { modalClassName } = this.state;
    const styleMap = {
      open: modalBackgroundOpen,
      transition: modalBackgroundTransition
    };
    const currentState = styleMap[modalClassName] || {};
    return { ...modalBackground, ...currentState };
  }

  calculateButtonStyle(
    closeButton: React.CSSProperties,
    closeButtonHover: React.CSSProperties,
    closeButtonText: React.CSSProperties,
    hoveredButtonText: React.CSSProperties
  ): { button: React.CSSProperties; buttonText: React.CSSProperties } {
    const { buttonIsHovered } = this.state;
    const button = buttonIsHovered
      ? { ...closeButton, ...closeButtonHover }
      : closeButton;
    const buttonText = buttonIsHovered
      ? { ...closeButtonText, ...hoveredButtonText }
      : closeButtonText;
    return { button, buttonText };
  }

  mergeStyles(): IModalStyle {
    const custom = this.props.customStyle as ICustomModalStyle;
    const merged = { ...modalStyle };
    for (const i in custom) {
      if (custom.hasOwnProperty(i)) {
        merged[i] = { ...merged[i], ...custom[i] };
      }
    }

    // set animation time
    merged.modalBackground.transitionDuration = `${this.state
      .modalAnimationTime / 1000}s`;
    return merged;
  }

  mouseOverButton(): void {
    this.setState({ buttonIsHovered: true });
  }

  setAnimationTime(): number {
    const { customStyle } = this.props;
    if (customStyle) {
      if (customStyle.animationTime === 0 || customStyle.animationTime) {
        return customStyle.animationTime;
      }
    }
    return modalStyle.animationTime;
  }

  toggleModalClass(shouldShowModal: boolean): void {
    this.setState({ modalClassName: 'transition' });
    const { modalAnimationTime } = this.state;
    const minUpdateTime = 17;
    const nextClass = shouldShowModal ? 'open' : '';
    const timer: number = shouldShowModal ? minUpdateTime : modalAnimationTime;
    setTimeout(() => this.setState({ modalClassName: nextClass }), timer);
  }

  render(): JSX.Element {
    const mergedStyles = this.mergeStyles();
    const {
      closeButton,
      closeButtonText,
      closeButtonHover,
      hoveredButtonText,
      modalBackground,
      modalBackgroundTransition,
      modalBackgroundOpen,
      modalBody,
      modalHeader,
      modalInner,
      modalTitle
    } = mergedStyles;
    const bgStyle = this.calculateBgStyle(
      modalBackground,
      modalBackgroundOpen,
      modalBackgroundTransition
    );
    const { button, buttonText } = this.calculateButtonStyle(
      closeButton,
      closeButtonHover,
      closeButtonText,
      hoveredButtonText
    );

    return (
      <div
        style={bgStyle}
        id="modal-modalBackground"
        onClick={this.closeOnBgClick}
      >
        <div id="modal-modalInner" style={modalInner}>
          <div id="modal-modalHeader" style={modalHeader}>
            <div id="modal-modalTitle" style={modalTitle}>
              {this.props.title}
            </div>
            <div
              id="modal-closeButton"
              onClick={this.props.closeModal}
              onMouseOut={this.buttonMouseOut}
              onMouseOver={this.mouseOverButton}
              style={button}
            >
              <span style={buttonText} id="modal-closeButtonText">
                X
              </span>
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

export { ICustomModalStyle };
export default Modal;
