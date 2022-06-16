"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_Gender = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Enum_Gender;
(function (Enum_Gender) {
    Enum_Gender["Hombre"] = "Hombre";
    Enum_Gender["Mujer"] = "Mujer";
})(Enum_Gender = exports.Enum_Gender || (exports.Enum_Gender = {}));
TypeGraphQL.registerEnumType(Enum_Gender, {
    name: "Enum_Gender",
    description: undefined,
});
