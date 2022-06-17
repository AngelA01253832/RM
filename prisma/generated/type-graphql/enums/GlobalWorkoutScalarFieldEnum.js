"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var GlobalWorkoutScalarFieldEnum;
(function (GlobalWorkoutScalarFieldEnum) {
    GlobalWorkoutScalarFieldEnum["id"] = "id";
    GlobalWorkoutScalarFieldEnum["indications"] = "indications";
    GlobalWorkoutScalarFieldEnum["goal"] = "goal";
    GlobalWorkoutScalarFieldEnum["goalvalue"] = "goalvalue";
    GlobalWorkoutScalarFieldEnum["coachId"] = "coachId";
})(GlobalWorkoutScalarFieldEnum = exports.GlobalWorkoutScalarFieldEnum || (exports.GlobalWorkoutScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(GlobalWorkoutScalarFieldEnum, {
    name: "GlobalWorkoutScalarFieldEnum",
    description: undefined,
});
