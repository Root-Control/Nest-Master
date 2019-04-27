import { NestMiddleware } from '@nestjs/common';
export declare class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function): Promise<(req: any, res: any, next: any) => void>;
}
