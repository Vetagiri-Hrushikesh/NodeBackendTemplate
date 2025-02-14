import express, { Request, Response, NextFunction, Router } from 'express';

const router: Router = express.Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('respond from index route get');
});

export default router;