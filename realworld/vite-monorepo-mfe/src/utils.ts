import type { NextFunction, Request, RequestHandler, Response } from 'express';

export const ah = (fn: (req: Request, res: Response, next: NextFunction) => Promise<Response>): RequestHandler => {
  return (req, res, next) => fn(req, res, next).catch(next);
};
