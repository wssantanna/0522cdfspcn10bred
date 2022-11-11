
import { PrismaClient } from '@prisma/client';

const AccountContext = new PrismaClient();

/*
    Create = AccountContext.user.create()
    Read (byId) = AccountContext.user.findFirst()
    Read (getAll) = AccountContext.user.findMany()
    Update = AccountContext.user.update()
    Delete AccountContext.user.delete()

    Referencia: https://www.prisma.io/docs/concepts/components/prisma-client/crud
*/

export { AccountContext }