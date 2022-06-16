"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightCreateOrConnectWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightCreateWithoutAthleteInput_1 = require("../inputs/WeightCreateWithoutAthleteInput");
const WeightWhereUniqueInput_1 = require("../inputs/WeightWhereUniqueInput");
let WeightCreateOrConnectWithoutAthleteInput = class WeightCreateOrConnectWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereUniqueInput_1.WeightWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WeightWhereUniqueInput_1.WeightWhereUniqueInput)
], WeightCreateOrConnectWithoutAthleteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightCreateWithoutAthleteInput_1.WeightCreateWithoutAthleteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WeightCreateWithoutAthleteInput_1.WeightCreateWithoutAthleteInput)
], WeightCreateOrConnectWithoutAthleteInput.prototype, "create", void 0);
WeightCreateOrConnectWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightCreateOrConnectWithoutAthleteInput", {
        isAbstract: true
    })
], WeightCreateOrConnectWithoutAthleteInput);
exports.WeightCreateOrConnectWithoutAthleteInput = WeightCreateOrConnectWithoutAthleteInput;
