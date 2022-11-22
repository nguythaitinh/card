"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var ui_1 = require("@metacraft/ui");
var resources_1 = require("../../../../../utils/resources");
var BattlefieldOverview_1 = require("../../BattlefieldOverview");
var Icon = function (_a) {
    var type = _a.type;
    var resource = null;
    var label = null;
    switch (type) {
        case BattlefieldOverview_1.ViewType.Hand:
            resource = resources_1["default"].guide.battlefieldOverview.hand;
            label = 'Hand';
            break;
        case BattlefieldOverview_1.ViewType.Deck:
            resource = resources_1["default"].guide.battlefieldOverview.deck;
            label = 'Deck';
            break;
        case BattlefieldOverview_1.ViewType.Spell:
            resource = resources_1["default"].guide.battlefieldOverview.spell;
            label = 'Spell';
            break;
        case BattlefieldOverview_1.ViewType.Grave:
            resource = resources_1["default"].guide.battlefieldOverview.grave;
            label = 'Grave';
            break;
        case BattlefieldOverview_1.ViewType.SummonZone:
            resource = resources_1["default"].guide.battlefieldOverview.summonZone;
            label = 'Summon Zone';
            break;
        case BattlefieldOverview_1.ViewType.EndTurn:
            resource = resources_1["default"].guide.battlefieldOverview.endTurn;
            label = 'End Turn';
            break;
        case BattlefieldOverview_1.ViewType.HealthPoint:
            resource = resources_1["default"].guide.battlefieldOverview.healthPoint;
            label = 'Health Point';
            break;
        case BattlefieldOverview_1.ViewType.History:
            resource = resources_1["default"].guide.battlefieldOverview.history;
            label = 'History';
            break;
    }
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.Image, { source: resource, style: styles.icon, resizeMode: 'contain' }),
        react_1["default"].createElement(ui_1.Text, { style: styles.label }, label)));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    icon: {
        width: 32,
        height: 32
    },
    label: {
        fontSize: 10,
        color: '#EBEBEB',
        textAlign: 'center',
        marginTop: 4
    }
});
exports["default"] = Icon;
