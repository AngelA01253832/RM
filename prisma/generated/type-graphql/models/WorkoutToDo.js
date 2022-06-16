"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDo = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Goal_1 = require("../enums/Enum_Goal");
let WorkoutToDo = class WorkoutToDo {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDo.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], WorkoutToDo.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDo.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDo.prototype, "coachId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDo.prototype, "athleteId", void 0);
WorkoutToDo = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WorkoutToDo", {
        isAbstract: true
    })
], WorkoutToDo);
exports.WorkoutToDo = WorkoutToDo;
