"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WeightMinAggregate = class WeightMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], WeightMinAggregate.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WeightMinAggregate.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightMinAggregate.prototype, "athleteId", void 0);
WeightMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WeightMinAggregate", {
        isAbstract: true
    })
], WeightMinAggregate);
exports.WeightMinAggregate = WeightMinAggregate;
