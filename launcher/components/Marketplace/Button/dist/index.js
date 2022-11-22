"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.UnderRealmButton = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_reanimated_1 = require("react-native-reanimated");
var ui_1 = require("@metacraft/ui");
var helper_1 = require("../../../utils/helper");
var resources_1 = require("../../../utils/resources");
var shared_1 = require("./shared");
var AnimatedView = react_native_reanimated_1["default"].createAnimatedComponent(react_native_1.View);
exports.UnderRealmButton = function (_a) {
    var style = _a.style, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.title, title = _c === void 0 ? '' : _c, texStyle = _a.texStyle, children = _a.children, _d = _a.isSubButton, isSubButton = _d === void 0 ? false : _d, onPress = _a.onPress, _e = _a.useHoveredStyle, useHoveredStyle = _e === void 0 ? shared_1.useDefaultHoveredStyle : _e;
    var _f = react_1.useState(helper_1.idleLayout), layout = _f[0], setLayout = _f[1];
    var source = isSubButton
        ? resources_1["default"].marketplace.underRealmSubButton
        : resources_1["default"].marketplace.underRealmButton;
    var middle = {
        position: 'absolute',
        top: 0,
        left: 5,
        right: 5,
        height: layout.height
    };
    var edge = {
        position: 'absolute',
        top: 0,
        height: layout.height,
        width: layout.height
    };
    var left = __assign(__assign({}, edge), { left: 0 });
    var right = __assign(__assign({}, edge), { right: 0 });
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.7, style: [styles.container, style, disabled && styles.disabledStyle], onLayout: function (_a) {
            var nativeEvent = _a.nativeEvent;
            return setLayout(nativeEvent.layout);
        }, onPress: onPress, disabled: disabled },
        layout.width && (react_1["default"].createElement(react_1.Fragment, null,
            react_1["default"].createElement(react_1.Fragment, null,
                react_1["default"].createElement(react_native_1.Image, { style: middle, source: source.hover.middle, resizeMode: "repeat" }),
                react_1["default"].createElement(react_native_1.Image, { style: left, source: source.hover.left }),
                react_1["default"].createElement(react_native_1.Image, { style: right, source: source.hover.right })))),
        react_1["default"].createElement(react_native_1.View, null, children || react_1["default"].createElement(ui_1.Text, { style: [styles.titleStyle, texStyle] }, title)),
        react_1["default"].createElement(ui_1.Hoverable, { style: __assign(__assign({}, middle), { left: 0, right: 0, justifyContent: 'center' }), animatedStyle: useHoveredStyle },
            react_1["default"].createElement(AnimatedView, null,
                react_1["default"].createElement(react_native_1.Image, { style: middle, source: source.normal.middle, resizeMode: "repeat" }),
                react_1["default"].createElement(react_native_1.Image, { style: left, source: source.normal.left }),
                react_1["default"].createElement(react_native_1.Image, { style: right, source: source.normal.right }),
                react_1["default"].createElement(react_native_1.View, null, children || (react_1["default"].createElement(ui_1.Text, { style: [styles.titleStyle, texStyle] }, title)))))));
};
exports["default"] = exports.UnderRealmButton;
var styles = react_native_1.StyleSheet.create({
    container: {
        paddingVertical: 12,
        paddingHorizontal: 10
    },
    titleStyle: {
        textAlign: 'center',
        color: '#fff'
    },
    disabledStyle: {
        opacity: 0.7
    }
});
