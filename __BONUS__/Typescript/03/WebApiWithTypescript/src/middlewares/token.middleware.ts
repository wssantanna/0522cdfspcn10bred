
import { Request, Response, NextFunction } from 'express';

import Jwt from 'jsonwebtoken';

class TokenMiddleware {

    private static readonly TOKEN_SECRET_KEY = 'isac'; 

    static GetToken(user: any) {

        const payload = { ...user }

        const token = Jwt.sign(payload, this.TOKEN_SECRET_KEY)

        return token;
    }

    static Authorize(req:Request, res: Response, next: NextFunction) {
        
        const currentToken = req.header('Authorization');

        if(currentToken == null) {
            res
                .status(401) // Unauthorized
                .json({ message: 'Usuário deslogado'});
        }
        else {
            const payloadDecoded = Jwt.verify(currentToken, this.TOKEN_SECRET_KEY);

            payloadDecoded 
                ? next() : 
                res
                    .status(401)
                    .json({ message: 'Token inválido'});
        }
    }

}

export { TokenMiddleware };