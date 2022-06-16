"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var DoneWorkoutScalarFieldEnum;
(function (DoneWorkoutScalarFieldEnum) {
    DoneWorkoutScalarFieldEnum["id"] = "id";
    DoneWorkoutScalarFieldEnum["date"] = "date";
    DoneWorkoutScalarFieldEnum["calories"] = "calories";
    DoneWorkoutScalarFieldEnum["time"] = "time";
    DoneWorkoutScalarFieldEnum["distance"] = "distance";
    DoneWorkoutScalarFieldEnum["intensity"] = "intensity";
    DoneWorkoutScalarFieldEnum["athleteId"] = "athleteId";
})(DoneWorkoutScalarFieldEnum = exports.DoneWorkoutScalarFieldEnum || (exports.DoneWorkoutScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(DoneWorkoutScalarFieldEnum, {
    name: "DoneWorkoutScalarFieldEnum",
    description: undefined,
});
