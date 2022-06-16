"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_Goal = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Enum_Goal;
(function (Enum_Goal) {
    Enum_Goal["Tiempo"] = "Tiempo";
    Enum_Goal["Calorias"] = "Calorias";
    Enum_Goal["Distancia"] = "Distancia";
})(Enum_Goal = exports.Enum_Goal || (exports.Enum_Goal = {}));
TypeGraphQL.registerEnumType(Enum_Goal, {
    name: "Enum_Goal",
    description: undefined,
});
