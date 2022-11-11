
import Express from 'express';

import { AccountRouter } from './routers/account.routers';

const App = Express();

/*

    -[ ] Rotas 
        - [ ] Interceptador
            - [ ] Controladores
                - [ ] Modelos
                    - [ ] ORM - Prisma, Sequelize, TypeORM, etc...

*/

App.use(Express.json());

App.use('/account', AccountRouter);

App.listen(1234, () => console.log('Servidor está rodando'));
