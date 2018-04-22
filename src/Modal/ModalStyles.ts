const headerHeight = 50;
const interiorPadding = 20;
export const modalAnimationTime = 300;

export const closeButton: React.CSSProperties = {
  height: `${headerHeight}px`,
  width: `${headerHeight}px`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'normal',
  color: '#999'
};

export const modalBackground: React.CSSProperties = {
  position: 'fixed',
  zIndex: 9999,
  height: '100vh',
  width: '100vw',
  top: '0',
  left: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  display: 'none',
  transition: `all ${modalAnimationTime / 1000}s ease-in-out`
};

export const modalBackgroundTransition: React.CSSProperties = {
  display: 'block',
  opacity: 0,
  paddingTop: 0
};

export const modalBackgroundOpen: React.CSSProperties = {
  display: 'block',
  opacity: 1,
  paddingTop: '45px'
};

export const modalBody: React.CSSProperties = {
  padding: `${interiorPadding / 2}px ${interiorPadding}px`
};

export const modalHeader: React.CSSProperties = {
  display: 'flex',
  height: `${headerHeight}px`,
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: `${interiorPadding}px`,
  fontSize: '18px',
  fontWeight: 'bold',
  borderBottom: '1px solid #ccc'
};

export const modalInner: React.CSSProperties = {
  margin: '0 auto',
  width: '98%',
  maxWidth: '700px',
  minHeight: '200px',
  backgroundColor: 'white',
  borderRadius: '2px',
  fontFamily: 'Arial, Helvetica, sans-serif'
};
