import { prisma } from '@/lib/prisma'
import { ICountCheckInsByUserIdRepository } from '@/repositories/interfaces'

export class CountCheckInsByUserIdRepository
    implements ICountCheckInsByUserIdRepository
{
    async execute(userId: string) {
        const count = await prisma.checkIn.count({
            where: {
                user_id: userId,
            },
        })

        return count
    }
}
