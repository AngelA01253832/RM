"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AthleteSumAggregate = class AthleteSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AthleteSumAggregate.prototype, "height", void 0);
AthleteSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AthleteSumAggregate", {
        isAbstract: true
    })
], AthleteSumAggregate);
exports.AthleteSumAggregate = AthleteSumAggregate;
