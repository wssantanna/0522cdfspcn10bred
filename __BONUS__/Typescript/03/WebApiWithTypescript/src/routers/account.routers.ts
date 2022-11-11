
import { Router } from 'express';

import { AuthController } from '../controllers/auth.controller';
import { TokenMiddleware } from '../middlewares/token.middleware';

const AccountRouter = Router();

AccountRouter.post('/signin', AuthController.SignIn);
AccountRouter.get('/my-account', TokenMiddleware.Authorize, () => {})

export { AccountRouter }