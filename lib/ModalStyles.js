"use strict";
exports.__esModule = true;
var headerHeight = 50;
var interiorPadding = 20;
exports.modalAnimationTime = 900;
exports.closeButton = {
    height: headerHeight + "px",
    width: headerHeight + "px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'normal',
    color: '#999'
};
exports.modalBackground = {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    top: '0',
    left: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'none',
    transition: "all " + exports.modalAnimationTime / 1000 + "s ease-in-out"
};
exports.modalBackgroundTransition = {
    display: 'block',
    opacity: 0,
    paddingTop: 0
};
exports.modalBackgroundOpen = {
    display: 'block',
    opacity: 1,
    paddingTop: '75px'
};
exports.modalBody = {
    padding: interiorPadding / 2 + "px " + interiorPadding + "px"
};
exports.modalHeader = {
    display: 'flex',
    height: headerHeight + "px",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: interiorPadding + "px",
    fontSize: '18px',
    fontWeight: 'bold',
    borderBottom: '1px solid #ccc'
};
exports.modalInner = {
    margin: '0 auto',
    width: '98%',
    maxWidth: '700px',
    minHeight: '200px',
    backgroundColor: 'white',
    borderRadius: '2px'
};
