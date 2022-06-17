"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var WorkoutToDoScalarFieldEnum;
(function (WorkoutToDoScalarFieldEnum) {
    WorkoutToDoScalarFieldEnum["id"] = "id";
    WorkoutToDoScalarFieldEnum["date"] = "date";
    WorkoutToDoScalarFieldEnum["indications"] = "indications";
    WorkoutToDoScalarFieldEnum["goal"] = "goal";
    WorkoutToDoScalarFieldEnum["goalvalue"] = "goalvalue";
    WorkoutToDoScalarFieldEnum["coachId"] = "coachId";
    WorkoutToDoScalarFieldEnum["athleteId"] = "athleteId";
})(WorkoutToDoScalarFieldEnum = exports.WorkoutToDoScalarFieldEnum || (exports.WorkoutToDoScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(WorkoutToDoScalarFieldEnum, {
    name: "WorkoutToDoScalarFieldEnum",
    description: undefined,
});
