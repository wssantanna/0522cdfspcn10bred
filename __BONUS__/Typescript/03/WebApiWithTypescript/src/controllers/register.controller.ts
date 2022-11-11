import { Request, Response } from "express";

class RegisterController {
    
    static async SignUp(req: Request, res: Response) {
        
        const RegisterBody = req.body;
        
        try {
            const registedUser = true;
    
            if(registedUser) {
                res
                    .status(201)
                    .json({ message: 'Usuário criado com sucesso!'});
            }
            else {
                res
                    .status(400)
                    .json({ message: 'Não foi possível cadastrar o usuário!'})
            }
        }
        catch(error) {
            res.
                status(500)
                .json({ message: 'Erro no servidor' });
        }
     }
}

export { RegisterController }