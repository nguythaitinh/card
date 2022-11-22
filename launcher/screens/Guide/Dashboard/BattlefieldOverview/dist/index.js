"use strict";
exports.__esModule = true;
exports.ViewType = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Icon_1 = require("./Icon");
var Title_1 = require("./Title");
var ViewType;
(function (ViewType) {
    ViewType[ViewType["Hand"] = 0] = "Hand";
    ViewType[ViewType["Deck"] = 1] = "Deck";
    ViewType[ViewType["Spell"] = 2] = "Spell";
    ViewType[ViewType["Grave"] = 3] = "Grave";
    ViewType[ViewType["SummonZone"] = 4] = "SummonZone";
    ViewType[ViewType["EndTurn"] = 5] = "EndTurn";
    ViewType[ViewType["HealthPoint"] = 6] = "HealthPoint";
    ViewType[ViewType["History"] = 7] = "History";
})(ViewType = exports.ViewType || (exports.ViewType = {}));
var viewTypeIcons = [
    {
        type: ViewType.Hand,
        label: 'Hand'
    },
    {
        type: ViewType.Deck,
        label: 'Deck'
    },
    {
        type: ViewType.Spell,
        label: 'Spell'
    },
    {
        type: ViewType.Grave,
        label: 'Grave'
    },
    {
        type: ViewType.SummonZone,
        label: 'Summon Zone'
    },
    {
        type: ViewType.EndTurn,
        label: 'End Turn'
    },
    {
        type: ViewType.HealthPoint,
        label: 'Health Point'
    },
    {
        type: ViewType.History,
        label: 'History'
    },
];
var BattlefieldOverview = function () {
    var _a = react_1.useState(viewTypeIcons[0]), currentViewTypeIcon = _a[0], setCurrentViewTypeIcon = _a[1];
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(Title_1["default"], null),
        react_1["default"].createElement(react_native_1.View, { style: styles.iconsRow }, viewTypeIcons.map(function (viewTypeIcon) { return (react_1["default"].createElement(Icon_1["default"], { key: viewTypeIcon.type, type: viewTypeIcon.type })); }))));
};
var styles = react_native_1.StyleSheet.create({
    container: { width: '100%', alignItems: 'center', marginTop: 40 },
    iconsRow: {
        width: 600,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 32
    }
});
exports["default"] = BattlefieldOverview;
