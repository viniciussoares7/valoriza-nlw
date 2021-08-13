import {Request,Response,NextFunction} from "express";
import { JwtPayload, verify } from "jsonwebtoken";

interface IPayload{
  sub:string;
}


export function ensureAuthenticated(
  request:Request,
  response:Response,
  next: NextFunction
){

// Receber o token
const authToken = request.headers.authorization;

// Validar se o token está preenchido
if(!authToken){
  return response.status(401).end();
}

const [, token] = authToken.split(" ")
try {
  // Validar se token é valido
  const {sub} = verify(token,"7fa81ff5e6a88a34ca2392240268c68f") as IPayload;

  // Recuperar informações do usuário
  request.user_id = sub;

  return next();
} catch (err) {
  return response.status(401).end();
}


}