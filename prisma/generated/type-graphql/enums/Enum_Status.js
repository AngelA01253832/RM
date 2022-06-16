"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_Status = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Enum_Status;
(function (Enum_Status) {
    Enum_Status["Negado"] = "Negado";
    Enum_Status["Autorizado"] = "Autorizado";
})(Enum_Status = exports.Enum_Status || (exports.Enum_Status = {}));
TypeGraphQL.registerEnumType(Enum_Status, {
    name: "Enum_Status",
    description: undefined,
});
