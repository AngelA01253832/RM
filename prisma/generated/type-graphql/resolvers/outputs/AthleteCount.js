"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AthleteCount = class AthleteCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AthleteCount.prototype, "Weights", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AthleteCount.prototype, "DoneWorkouts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AthleteCount.prototype, "WorkoutstToDo", void 0);
AthleteCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AthleteCount", {
        isAbstract: true
    })
], AthleteCount);
exports.AthleteCount = AthleteCount;
