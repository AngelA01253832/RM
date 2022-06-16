"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DoneWorkoutMaxAggregate = class DoneWorkoutMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DoneWorkoutMaxAggregate.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutMaxAggregate.prototype, "calories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutMaxAggregate.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutMaxAggregate.prototype, "distance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutMaxAggregate.prototype, "intensity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutMaxAggregate.prototype, "athleteId", void 0);
DoneWorkoutMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DoneWorkoutMaxAggregate", {
        isAbstract: true
    })
], DoneWorkoutMaxAggregate);
exports.DoneWorkoutMaxAggregate = DoneWorkoutMaxAggregate;
