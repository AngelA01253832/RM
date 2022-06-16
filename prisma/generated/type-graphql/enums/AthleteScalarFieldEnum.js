"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AthleteScalarFieldEnum;
(function (AthleteScalarFieldEnum) {
    AthleteScalarFieldEnum["id"] = "id";
    AthleteScalarFieldEnum["name"] = "name";
    AthleteScalarFieldEnum["lastname"] = "lastname";
    AthleteScalarFieldEnum["schoolId"] = "schoolId";
    AthleteScalarFieldEnum["gender"] = "gender";
    AthleteScalarFieldEnum["height"] = "height";
    AthleteScalarFieldEnum["userId"] = "userId";
})(AthleteScalarFieldEnum = exports.AthleteScalarFieldEnum || (exports.AthleteScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AthleteScalarFieldEnum, {
    name: "AthleteScalarFieldEnum",
    description: undefined,
});
