import { string, z } from "zod";


export type PostType = {
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    id: string;
    name: string;
    target: string;
    secondaryMuscles: string[];
    instructions: string[];
}

export type User ={
    user: {
    name:string
    email:string
    password:string
    }
}

export const loginSchema = z.object({
    email:z.string(),
    password:z.string().min(8, 'hasło musi mieć co najmniej 8 znaków')
})

export const registerSchema = z.object({
    name:z.string().max(20),
    email:z.string(),
    password:z.string().min(8, 'hasło musi mieć co najmniej 8 znaków')
})

export type DecodedJWT = {
    token_type: string;
    exp: number;
    iat: number;
    jti: string;
    user_id: number;
  };
  

export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchema>