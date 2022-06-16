"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCreateNestedOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminCreateOrConnectWithoutUserInput_1 = require("../inputs/AdminCreateOrConnectWithoutUserInput");
const AdminCreateWithoutUserInput_1 = require("../inputs/AdminCreateWithoutUserInput");
const AdminWhereUniqueInput_1 = require("../inputs/AdminWhereUniqueInput");
let AdminCreateNestedOneWithoutUserInput = class AdminCreateNestedOneWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminCreateWithoutUserInput_1.AdminCreateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminCreateWithoutUserInput_1.AdminCreateWithoutUserInput)
], AdminCreateNestedOneWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminCreateOrConnectWithoutUserInput_1.AdminCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminCreateOrConnectWithoutUserInput_1.AdminCreateOrConnectWithoutUserInput)
], AdminCreateNestedOneWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminWhereUniqueInput_1.AdminWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminWhereUniqueInput_1.AdminWhereUniqueInput)
], AdminCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
AdminCreateNestedOneWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AdminCreateNestedOneWithoutUserInput", {
        isAbstract: true
    })
], AdminCreateNestedOneWithoutUserInput);
exports.AdminCreateNestedOneWithoutUserInput = AdminCreateNestedOneWithoutUserInput;
