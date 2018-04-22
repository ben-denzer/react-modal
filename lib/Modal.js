"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
var ModalStyles_1 = require("./ModalStyles");
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            buttonIsHovered: false,
            modalClassName: ''
        };
        _this.buttonMouseOut = _this.buttonMouseOut.bind(_this);
        _this.closeOnBgClick = _this.closeOnBgClick.bind(_this);
        _this.mouseOverButton = _this.mouseOverButton.bind(_this);
        _this.toggleModalClass = _this.toggleModalClass.bind(_this);
        return _this;
    }
    Modal.prototype.componentDidUpdate = function (prevProps) {
        var nextModalState = this.props.shouldShowModal;
        if (prevProps.shouldShowModal !== nextModalState) {
            this.toggleModalClass(nextModalState);
        }
    };
    Modal.prototype.buttonMouseOut = function () {
        this.setState({ buttonIsHovered: false });
    };
    Modal.prototype.closeOnBgClick = function (e) {
        var dataset = e.target.dataset;
        if (!dataset.targetId || dataset.targetId !== 'modalBg') {
            return;
        }
        this.props.closeModal();
    };
    Modal.prototype.calculateBgStyle = function () {
        var modalClassName = this.state.modalClassName;
        var styleMap = {
            open: ModalStyles_1.modalBackgroundOpen,
            transition: ModalStyles_1.modalBackgroundTransition
        };
        var defaultOverrides = styleMap[modalClassName] || {};
        return __assign({}, ModalStyles_1.modalBackground, defaultOverrides);
    };
    Modal.prototype.calculateButtonStyle = function () {
        var buttonIsHovered = this.state.buttonIsHovered;
        var hoverStyle = {
            cursor: 'pointer',
            color: '#222'
        };
        return buttonIsHovered ? __assign({}, ModalStyles_1.closeButton, hoverStyle) : ModalStyles_1.closeButton;
    };
    Modal.prototype.mouseOverButton = function () {
        this.setState({ buttonIsHovered: true });
    };
    Modal.prototype.toggleModalClass = function (shouldShowModal) {
        var _this = this;
        this.setState({ modalClassName: 'transition' });
        var minUpdateTime = 17;
        var nextClass = shouldShowModal ? 'open' : '';
        var timer = shouldShowModal ? minUpdateTime : ModalStyles_1.modalAnimationTime;
        setTimeout(function () { return _this.setState({ modalClassName: nextClass }); }, timer);
    };
    Modal.prototype.render = function () {
        return (React.createElement("div", { style: this.calculateBgStyle(), "data-target-id": "modalBg", onClick: this.closeOnBgClick },
            React.createElement("div", { style: ModalStyles_1.modalInner },
                React.createElement("div", { style: ModalStyles_1.modalHeader },
                    React.createElement("div", null, this.props.title),
                    React.createElement("div", { onClick: this.props.closeModal, onMouseOut: this.buttonMouseOut, onMouseOver: this.mouseOverButton, style: this.calculateButtonStyle() }, "X")),
                React.createElement("div", { style: ModalStyles_1.modalBody }, this.props.children))));
    };
    return Modal;
}(React.Component));
exports["default"] = Modal;
