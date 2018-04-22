// Type definitions for [~@ben-denzer/react-modal~]
// Definitions by: [~Ben Denzer~] <[~https://bdenzer.com~]>

/// <reference types="react"/>
declare module 'bdenzer-modal' {
  interface IModalProps {
    shouldShowModal: boolean;
    style?: React.CSSProperties;
    title?: string;
    closeModal(): void;
  }
  const Modal: React.ComponentClass<IModalProps>;
  export default Modal;
}
