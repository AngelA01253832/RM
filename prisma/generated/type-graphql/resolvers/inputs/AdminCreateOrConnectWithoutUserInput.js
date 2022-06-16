"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminCreateWithoutUserInput_1 = require("../inputs/AdminCreateWithoutUserInput");
const AdminWhereUniqueInput_1 = require("../inputs/AdminWhereUniqueInput");
let AdminCreateOrConnectWithoutUserInput = class AdminCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminWhereUniqueInput_1.AdminWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdminWhereUniqueInput_1.AdminWhereUniqueInput)
], AdminCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminCreateWithoutUserInput_1.AdminCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdminCreateWithoutUserInput_1.AdminCreateWithoutUserInput)
], AdminCreateOrConnectWithoutUserInput.prototype, "create", void 0);
AdminCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AdminCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], AdminCreateOrConnectWithoutUserInput);
exports.AdminCreateOrConnectWithoutUserInput = AdminCreateOrConnectWithoutUserInput;
