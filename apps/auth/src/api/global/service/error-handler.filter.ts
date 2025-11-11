import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {Request, Response} from 'express';

@Injectable()
@Catch()
export class ErrorHandlerFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let statusCode:number;
    let errorMessage = '';
    let errorName = '';

    if(exception instanceof HttpException){
        statusCode = exception.getStatus();
        const exceptionRes = exception.getResponse();

        if(typeof exceptionRes === 'string'){
            errorMessage = exceptionRes;
            errorName = exception.name;
        } else if (typeof exceptionRes === 'object' && exceptionRes !== null){
            errorMessage = (exceptionRes as any).message || exception.message;
            errorName = (exceptionRes as any).error || exception.name;
        }
    } else {
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
        errorMessage = 'We encountered an unexpected error. Please reach out to the system administrator.';
        errorName = 'Error';
    }

    console.log(exception,request,response);

    response.status(statusCode).json({
        statusCode,
        path: request.url,
        error: errorName,
        errorMessage
    })
  }
}
