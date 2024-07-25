import { NextFunction } from 'express';
import { HttpException } from '../../types/HttpException';
import { status } from 'express/lib/response';


export function errorMiddleware(
    err: HttpException, 
    req: Request, 
    res: Response, 
    next: NextFunction,
) {
   return res.status(err.status).json({
    status: 500, 
    message: err.message || 'Internal server error', 

   });
};