import express, { Request, Response, NextFunction, Router } from 'express';

const router: Router = express.Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('respond with a resource AAA');
});

export default router;