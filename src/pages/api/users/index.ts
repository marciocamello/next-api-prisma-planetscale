
import { PrismaClient } from '@prisma/client'

import {
    NextApiRequest,
    NextApiResponse,
} from 'next';

import { getUsers } from '../../../lib/users';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':

            const users = await getUsers();

            res.status(200).json({
                data: users
            })
            break;
        case 'POST':
            const { name } = req.body;

            const user = await prisma.user.create({
                data: {
                    name
                }
            });

            res.status(200).json({
                data: user
            })

        default:
            res.status(405).json({
                message: 'Method Not Allowed'
            })
            break;
    }
}
