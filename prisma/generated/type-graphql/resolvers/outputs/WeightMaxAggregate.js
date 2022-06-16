"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WeightMaxAggregate = class WeightMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], WeightMaxAggregate.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WeightMaxAggregate.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightMaxAggregate.prototype, "athleteId", void 0);
WeightMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WeightMaxAggregate", {
        isAbstract: true
    })
], WeightMaxAggregate);
exports.WeightMaxAggregate = WeightMaxAggregate;
