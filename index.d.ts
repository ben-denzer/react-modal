// Type definitions for [~@ben-denzer/react-modal~]
// Definitions by: [~Ben Denzer~] <[~https://bdenzer.com~]>

/// <reference types="react"/>
declare module '@bdenzer/react-modal' {
  interface ICustomModalStyle {
    animationTime?: number;
    closeButton?: React.CSSProperties;
    closeButtonHover?: React.CSSProperties;
    closeButtonText?: React.CSSProperties;
    hoveredButtonText?: React.CSSProperties;
    modalBackground?: React.CSSProperties;
    modalBackgroundOpen?: React.CSSProperties;
    modalBackgroundTransition?: React.CSSProperties;
    modalBody?: React.CSSProperties;
    modalHeader?: React.CSSProperties;
    modalInner?: React.CSSProperties;
    modalTitle?: React.CSSProperties;
  }

  interface IModalProps {
    shouldShowModal: boolean;
    customStyle?: ICustomModalStyle;
    onlyCloseWithButton?: boolean;
    title?: string;
    closeModal(): void;
  }

  const Modal: React.ComponentClass<IModalProps>;
  export { IModalProps, ICustomModalStyle };
  export default Modal;
}
