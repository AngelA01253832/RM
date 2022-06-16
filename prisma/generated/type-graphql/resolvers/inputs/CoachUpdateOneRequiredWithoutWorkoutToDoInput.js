"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachUpdateOneRequiredWithoutWorkoutToDoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCreateOrConnectWithoutWorkoutToDoInput_1 = require("../inputs/CoachCreateOrConnectWithoutWorkoutToDoInput");
const CoachCreateWithoutWorkoutToDoInput_1 = require("../inputs/CoachCreateWithoutWorkoutToDoInput");
const CoachUpdateWithoutWorkoutToDoInput_1 = require("../inputs/CoachUpdateWithoutWorkoutToDoInput");
const CoachUpsertWithoutWorkoutToDoInput_1 = require("../inputs/CoachUpsertWithoutWorkoutToDoInput");
const CoachWhereUniqueInput_1 = require("../inputs/CoachWhereUniqueInput");
let CoachUpdateOneRequiredWithoutWorkoutToDoInput = class CoachUpdateOneRequiredWithoutWorkoutToDoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateWithoutWorkoutToDoInput_1.CoachCreateWithoutWorkoutToDoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachCreateWithoutWorkoutToDoInput_1.CoachCreateWithoutWorkoutToDoInput)
], CoachUpdateOneRequiredWithoutWorkoutToDoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateOrConnectWithoutWorkoutToDoInput_1.CoachCreateOrConnectWithoutWorkoutToDoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachCreateOrConnectWithoutWorkoutToDoInput_1.CoachCreateOrConnectWithoutWorkoutToDoInput)
], CoachUpdateOneRequiredWithoutWorkoutToDoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachUpsertWithoutWorkoutToDoInput_1.CoachUpsertWithoutWorkoutToDoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachUpsertWithoutWorkoutToDoInput_1.CoachUpsertWithoutWorkoutToDoInput)
], CoachUpdateOneRequiredWithoutWorkoutToDoInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereUniqueInput_1.CoachWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachWhereUniqueInput_1.CoachWhereUniqueInput)
], CoachUpdateOneRequiredWithoutWorkoutToDoInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachUpdateWithoutWorkoutToDoInput_1.CoachUpdateWithoutWorkoutToDoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachUpdateWithoutWorkoutToDoInput_1.CoachUpdateWithoutWorkoutToDoInput)
], CoachUpdateOneRequiredWithoutWorkoutToDoInput.prototype, "update", void 0);
CoachUpdateOneRequiredWithoutWorkoutToDoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachUpdateOneRequiredWithoutWorkoutToDoInput", {
        isAbstract: true
    })
], CoachUpdateOneRequiredWithoutWorkoutToDoInput);
exports.CoachUpdateOneRequiredWithoutWorkoutToDoInput = CoachUpdateOneRequiredWithoutWorkoutToDoInput;
