Perfect 👍 now your code looks **clean, safe, and production-ready**.
Here’s a complete **README.md** for your GitHub package `@anurag_raj_09/common`. I’ll write it in a way so that any developer visiting your repo will instantly understand **what your package does, how to install it, and how to use every single function with examples**.

---

````markdown
# @anurag_raj_09/common

A lightweight **authentication and validation utility package** built with **TypeScript, Zod, Bcrypt, and JWT**.  
It provides ready-to-use helpers for:

- 🔐 User signup & signin validation (`zod`)
- 🔑 Password hashing and comparison (`bcrypt`)
- 🎟️ JWT token creation & verification (`jsonwebtoken`)
- 🛡️ Express middleware for token protection

---

## 📦 Installation

```bash
npm install @anurag_raj_09/common
````

or with yarn:

```bash
yarn add @anurag_raj_09/common
```

---

## 🚀 Features

1. **User Validation Schemas**
   Validate signup & signin data with strict password rules (uppercase, lowercase, number, symbol).

2. **Password Security**
   Easily hash passwords and verify them using `bcrypt`.

3. **JWT Helpers**
   Generate and verify JSON Web Tokens securely.

4. **Express Middleware**
   Plug-and-play middleware to protect routes with JWT authentication.

---

## 📖 Usage Guide

### 1. User Signup Validation

```ts
import { UserSignupValidation } from "@anurag_raj_09/common";

const data = {
  username: "anurag123",
  password: "Secure@123",
  email: "user@example.com"
};

// Validate
const result = UserSignupValidation.safeParse(data);

if (!result.success) {
  console.log(result.error.format()); // Shows validation errors
} else {
  console.log(result.data); // ✅ Validated data
}
```

### 2. User Signin Validation

```ts
import { UserSigninValidation } from "@anurag_raj_09/common";

const credentials = {
  username: "anurag123",
  password: "Secure@123"
};

const result = UserSigninValidation.safeParse(credentials);

if (!result.success) {
  console.log(result.error.format());
} else {
  console.log(result.data);
}
```

---

### 3. Create Hashed Password

```ts
import { CreateHashpassword } from "@anurag_raj_09/common";

async function signup(password: string) {
  const { hashPass } = await CreateHashpassword(password);
  console.log("Hashed Password:", hashPass);
  return hashPass;
}

signup("Secure@123");
```

---

### 4. Check Hashed Password

```ts
import { CheckHashPassword } from "@anurag_raj_09/common";

async function login(password: string, hashed: string) {
  const isMatch = await CheckHashPassword(hashed, password);
  console.log("Password Match:", isMatch);
  return isMatch;
}

login("Secure@123", "$2b$10$abc...xyzHashedPassword");
```

---

### 5. Create JWT Token

```ts
import { CreateToken } from "@anurag_raj_09/common";

const { token } = CreateToken("user123", process.env.JWT_SECRET!);
console.log("JWT Token:", token);
```

---

### 6. Verify JWT Token (Express Middleware)

First, extend the Express `Request` type to include `userId`:

```ts
// index.d.ts
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}
```

Then use the middleware:

```ts
import express from "express";
import cookieParser from "cookie-parser";
import { VerifyToken } from "@anurag_raj_09/common";

const app = express();
app.use(cookieParser());

// Protected route
app.get(
  "/dashboard",
  VerifyToken(process.env.JWT_SECRET!),
  (req, res) => {
    res.json({ message: "Welcome!", userId: req.userId });
  }
);
```

---

## 📑 Types

* `UValidationSignup` → Type inferred from `UserSignupValidation`
* `UValidationSignin` → Type inferred from `UserSigninValidation`
* `TokenPayload` → Extends `JwtPayload` to include `_id: string`

Example:

```ts
import type { UValidationSignup, UValidationSignin } from "@anurag_raj_09/common";

const user: UValidationSignup = {
  username: "testuser",
  password: "Strong@123",
  email: "test@example.com"
};
```

---

## ⚡ Summary

* **Validation** → `UserSignupValidation`, `UserSigninValidation`
* **Password** → `CreateHashpassword`, `CheckHashPassword`
* **JWT** → `CreateToken`, `VerifyToken`

This package is designed to **save you time when building authentication systems in Node.js/Express apps**. 🚀

---

## 🛠️ Tech Stack

* [Zod](https://github.com/colinhacks/zod) – schema validation
* [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) – password hashing
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) – token management
* [Express](https://expressjs.com/) – middleware support

---

## 👨‍💻 Author

**Anurag Raj**
📦 NPM: [@anurag\_raj\_09/common](https://www.npmjs.com/package/@anurag_raj_09/common)
🐙 GitHub: [anurag-raj-09](https://github.com/anurag-raj-09)

```

---

⚡ This README is **ready to drop into your GitHub repo**.  
It gives full **installation, usage, and examples for every function** so developers won’t have to guess.

Do you also want me to add a **section with “Best Practices”** (like storing `JWT_SECRET` in `.env`, minimum password length, etc.) so new users don’t make mistakes?
```
