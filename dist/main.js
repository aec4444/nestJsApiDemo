"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const authentication_middleware_1 = require("./common/authentication.middleware");
const express = require("express");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = express();
        const auth = new authentication_middleware_1.AuthenticationMiddleware().resolve();
        server.post('/teams', auth);
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, server);
        yield app.listen(3000);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map