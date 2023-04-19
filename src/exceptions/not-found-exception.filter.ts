import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';

interface ErrorResponse {
  statusCode: number;
  message: string;
  error: string;
}

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const message = exception.message || 'Not found';

    const errorResponse: ErrorResponse = {
      statusCode: 404,
      message: message,
      error: 'Not found',
    };

    response.status(404).json(errorResponse);
  }
}
