import { z } from 'zod';
import { type JwtPayload } from 'jsonwebtoken';
import type { NextFunction, Request, Response } from 'express';
export declare const UserSignupValidation: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    email: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const UserSigninValidation: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const CreateHashpassword: (password: string) => Promise<{
    hashPass: string;
}>;
export declare const CheckHashPassword: (dbpassword: string, password: string) => Promise<boolean>;
export declare const CreateToken: (id: string, jwt_secret: string) => {
    token: string;
};
export interface TokenPayload extends JwtPayload {
    _id: string;
}
export declare const VerifyToken: (jwt_secret: string) => (req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
export type UValidationSignup = z.infer<typeof UserSignupValidation>;
export type UValidationSignin = z.infer<typeof UserSigninValidation>;
//# sourceMappingURL=index.d.ts.map