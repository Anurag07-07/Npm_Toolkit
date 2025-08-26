import { string, z } from 'zod';
import bcrypt from 'bcrypt';
import jwt, {} from 'jsonwebtoken';
export const UserSignupValidation = z.object({
    username: z.string().min(5).max(20),
    //Strict password include Capital Letter,Small letter,Number and Symbols
    password: z.string().min(5).max(50).regex(/[A-Z]/).regex(/[a-z]/).regex(/\d/).regex(/[^a-zA-Z0-9]/),
    email: z.string().min(8).max(40).optional()
});
export const UserSigninValidation = z.object({
    username: z.string().min(5).max(20),
    //Strict password include Capital Letter,Small letter,Number and Symbols
    password: z.string().min(5).max(50).regex(/[A-Z]/).regex(/[a-z]/).regex(/\d/).regex(/[^a-zA-Z0-9]/),
});
export const CreateHashpassword = async (password) => {
    const salt = await bcrypt.genSalt();
    const hashPass = await bcrypt.hash(password, salt);
    return { hashPass };
};
export const CheckHashPassword = async (dbpassword, password) => {
    const hashPass = await bcrypt.compare(password, dbpassword);
    return hashPass;
};
export const CreateToken = (id, jwt_secret) => {
    const token = jwt.sign({
        _id: id
    }, jwt_secret);
    return {
        token: token
    };
};
export const VerifyToken = (jwt_secret) => (req, res, next) => {
    //Fetch the token from cokkies or headers
    try {
        const fetch_token = req.headers.authorization;
        const token = fetch_token?.startsWith("Bearer ") ? fetch_token.split(" ")[1] : req.cookies?.token;
        if (!token) {
            return res.status(401).json({
                message: `No Token Provided`
            });
        }
        //Verify the token
        const decoded = jwt.verify(token, jwt_secret);
        if (decoded) {
            //Create index.d.ts
            // and write this
            // declare global{
            //   namespace Express{
            //     interface Request{
            //       userId?:string
            //     }
            //   }
            // }
            req.userId = decoded._id;
            return next();
        }
    }
    catch (error) {
        return res.status(401).json({
            message: "Invalid Token"
        });
    }
};
//# sourceMappingURL=index.js.map