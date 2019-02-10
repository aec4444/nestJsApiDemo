import { MiddlewareFunction, NestMiddleware } from '@nestjs/common';
export declare class AuthenticationMiddleware implements NestMiddleware {
    resolve(): MiddlewareFunction;
}
