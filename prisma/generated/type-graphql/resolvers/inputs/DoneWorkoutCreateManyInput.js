"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DoneWorkoutCreateManyInput = class DoneWorkoutCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], DoneWorkoutCreateManyInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutCreateManyInput.prototype, "calories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutCreateManyInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutCreateManyInput.prototype, "distance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutCreateManyInput.prototype, "intensity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutCreateManyInput.prototype, "athleteId", void 0);
DoneWorkoutCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DoneWorkoutCreateManyInput", {
        isAbstract: true
    })
], DoneWorkoutCreateManyInput);
exports.DoneWorkoutCreateManyInput = DoneWorkoutCreateManyInput;
