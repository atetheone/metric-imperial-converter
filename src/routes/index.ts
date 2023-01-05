import { Router, Request, Response } from "express";

const indexRouter: Router = Router();

indexRouter.get('/', (req: Request, res: Response) => {
  res.sendFile(process.cwd() + '/src/views/index.html');
});

export { indexRouter };