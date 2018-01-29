exports.id = 0;
exports.modules = {

/***/ "./build/src/pages/draw/draws.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_draw__ = __webpack_require__("./build/src/modules/draw/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__("react-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);




class DrawList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.onSelectDraw = (draw) => {
            this.props.selectDraw(draw);
            this.props.history.push('ticket/new');
        };
    }
    componentDidMount() {
        this.props.getDraws();
    }
    renderDraws() {
        return this.props.draws.map((draw) => {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { key: draw.id, onClick: () => this.onSelectDraw(draw) },
                "Draw Starts : ",
                draw.drawStart));
        });
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", null, this.renderDraws()));
    }
}
const mapStateToProps = (state) => {
    return { draws: state.draw.get('upcomingDraws') };
};
const mapDispatchToProps = (dispatch) => ({
    getDraws: () => {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__modules_draw__["b" /* getDraws */])());
    },
    selectDraw: (draw) => {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__modules_draw__["c" /* selectDraw */])(draw));
    }
});
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_router__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(DrawList)));


/***/ }),

/***/ "./build/src/pages/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__draw_draws__ = __webpack_require__("./build/src/pages/draw/draws.tsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__draw_draws__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__draw_addDraw__ = __webpack_require__("./build/src/pages/draw/addDraw.tsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__draw_addDraw__["a"]; });




/***/ })

};
//# sourceMappingURL=0.b22a89e72411a6784a54.hot-update.js.map