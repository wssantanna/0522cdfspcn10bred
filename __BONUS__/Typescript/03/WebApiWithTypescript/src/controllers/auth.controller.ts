
import { Request, Response } from 'express';

import { AccountContext } from '../contexts/account.context';
import { TokenMiddleware } from '../middlewares/token.middleware';

import { Credential } from '../models/account.models'

class AuthController {

    static async SignIn(req:Request, res:Response) {
        
        const credential: Credential = req.body;

        const userFound = await AccountContext.credential.findFirst(
            {
                where: credential,
                select: { user: true }
            }
        );
    
        if(userFound == null) {
            res
                .status(404)
                .json({ message: 'Usuário ou senha incorreta'});
        }
        else {
            const jwt: any = TokenMiddleware.GetToken(userFound);

            res
                .status(200)
                .json({...userFound, jwt});
        }
    }

}

export { AuthController }