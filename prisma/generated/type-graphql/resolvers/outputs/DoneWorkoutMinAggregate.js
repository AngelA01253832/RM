"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DoneWorkoutMinAggregate = class DoneWorkoutMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DoneWorkoutMinAggregate.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutMinAggregate.prototype, "calories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutMinAggregate.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutMinAggregate.prototype, "distance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutMinAggregate.prototype, "intensity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutMinAggregate.prototype, "athleteId", void 0);
DoneWorkoutMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DoneWorkoutMinAggregate", {
        isAbstract: true
    })
], DoneWorkoutMinAggregate);
exports.DoneWorkoutMinAggregate = DoneWorkoutMinAggregate;
