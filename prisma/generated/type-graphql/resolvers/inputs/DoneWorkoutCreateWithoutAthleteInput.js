"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutCreateWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DoneWorkoutCreateWithoutAthleteInput = class DoneWorkoutCreateWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutCreateWithoutAthleteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], DoneWorkoutCreateWithoutAthleteInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutCreateWithoutAthleteInput.prototype, "calories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutCreateWithoutAthleteInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutCreateWithoutAthleteInput.prototype, "distance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutCreateWithoutAthleteInput.prototype, "intensity", void 0);
DoneWorkoutCreateWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DoneWorkoutCreateWithoutAthleteInput", {
        isAbstract: true
    })
], DoneWorkoutCreateWithoutAthleteInput);
exports.DoneWorkoutCreateWithoutAthleteInput = DoneWorkoutCreateWithoutAthleteInput;
