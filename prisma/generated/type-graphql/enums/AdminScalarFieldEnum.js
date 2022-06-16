"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AdminScalarFieldEnum;
(function (AdminScalarFieldEnum) {
    AdminScalarFieldEnum["id"] = "id";
    AdminScalarFieldEnum["name"] = "name";
    AdminScalarFieldEnum["lastname"] = "lastname";
    AdminScalarFieldEnum["schoolId"] = "schoolId";
    AdminScalarFieldEnum["gender"] = "gender";
    AdminScalarFieldEnum["userId"] = "userId";
})(AdminScalarFieldEnum = exports.AdminScalarFieldEnum || (exports.AdminScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AdminScalarFieldEnum, {
    name: "AdminScalarFieldEnum",
    description: undefined,
});
