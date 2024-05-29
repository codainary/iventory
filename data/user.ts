import { db } from '@/lib/db';

export const gerUserByEmail = async (email:string) => {
    try {
        const user = await db.user.findUnique({ where: { email }});
        return user;
    } catch (error) {
        return null;
    }
};

export const gerUserById = async (id:string) => {
    try {
        const user = await db.user.findUnique({ where: { id }});
        return user;
    } catch (error) {
        return null;
    }
};