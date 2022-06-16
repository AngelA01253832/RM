"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CoachScalarFieldEnum;
(function (CoachScalarFieldEnum) {
    CoachScalarFieldEnum["id"] = "id";
    CoachScalarFieldEnum["name"] = "name";
    CoachScalarFieldEnum["lastname"] = "lastname";
    CoachScalarFieldEnum["schoolId"] = "schoolId";
    CoachScalarFieldEnum["description"] = "description";
    CoachScalarFieldEnum["gender"] = "gender";
    CoachScalarFieldEnum["status"] = "status";
    CoachScalarFieldEnum["userId"] = "userId";
})(CoachScalarFieldEnum = exports.CoachScalarFieldEnum || (exports.CoachScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CoachScalarFieldEnum, {
    name: "CoachScalarFieldEnum",
    description: undefined,
});
