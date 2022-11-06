import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export default class LoggerMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction) {

        next();
  
        const response = res;

        const statusSummary = {
            request: { url:req.url, method:req.method, ip:req.ip }, 
            body:req.body,
            response: { statusCode:response.statusCode, statusMessage:response.statusMessage }
        }

        Logger.log('Calling gitBashController:bashCommand()', statusSummary);
        
    }
}