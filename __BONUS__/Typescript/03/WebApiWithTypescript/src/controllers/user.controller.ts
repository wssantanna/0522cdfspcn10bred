import { Request, Response } from "express"

class UserController {
    
    static async GetAccount(_: Request, res: Response) {

        try {
            const currentUser = {}

            if(currentUser) {
                res
                    .status(200)
                    .json(currentUser)
            }
            else {
                res
                    .status(404)
                    .json({ message: 'Não foi possível encontrar o usuário'});
            }
        }
        catch(error) {
            res
                .status(500)
                .json({ message: 'Error no servidor!'});
        }

    }
}

export { UserController }