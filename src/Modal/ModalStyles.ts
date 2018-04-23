const headerHeight = 50;
const interiorPadding = 20;

export interface IModalStyle {
  animationTime: number;
  closeButton: React.CSSProperties;
  closeButtonHover: React.CSSProperties;
  closeButtonText: React.CSSProperties;
  hoveredButtonText: React.CSSProperties;
  modalBackground: React.CSSProperties;
  modalBackgroundOpen: React.CSSProperties;
  modalBackgroundTransition: React.CSSProperties;
  modalBody: React.CSSProperties;
  modalHeader: React.CSSProperties;
  modalInner: React.CSSProperties;
  modalTitle: React.CSSProperties;
}

export interface ICustomModalStyle {
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

export const modalStyle: IModalStyle = {
  animationTime: 300,

  closeButton: {
    height: `${headerHeight}px`,
    width: `${headerHeight}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'normal',
    color: '#999'
  },

  closeButtonHover: {
    cursor: 'pointer',
    color: '#222'
  },

  closeButtonText: {},

  hoveredButtonText: {},

  modalBackground: {
    position: 'fixed',
    zIndex: 9999,
    height: '100vh',
    width: '100vw',
    overflow: 'auto',
    top: '0',
    left: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'none',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease-in-out'
    // transitionDuration is set in Modal.tsx
  },

  modalBackgroundOpen: {
    display: 'block',
    opacity: 1,
    paddingTop: '45px'
  },

  modalBackgroundTransition: {
    display: 'block',
    opacity: 0,
    paddingTop: 0
  },

  modalBody: {
    flexGrow: 1,
    padding: `${interiorPadding / 2}px ${interiorPadding}px`
  },

  modalHeader: {
    display: 'flex',
    minHeight: `${headerHeight}px`,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: `${interiorPadding}px`,
    fontSize: '18px',
    fontWeight: 'bold',
    borderBottom: '1px solid #ccc'
  },

  modalInner: {
    margin: '0 auto 100px',
    width: '98%',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '700px',
    minHeight: '200px',
    backgroundColor: 'white',
    borderRadius: '2px',
    fontFamily: 'Arial, Helvetica, sans-serif'
  },

  modalTitle: {}
};
