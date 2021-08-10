import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import {compare} from "bcryptjs"
import { sign} from "jsonwebtoken"



interface IAuthenticateRequest { 
email:string;
password:string;
}


class AuthenticateUserService{
  async execute({email,password}:IAuthenticateRequest){
    const usersRepository = getCustomRepository(UsersRepositories);

    //verificar se o email existe
    const user = await usersRepository.findOne({
      email
    });

    if(!user){
      throw new Error ("Email/Password incorrect")
    }

    //verificar se a senha está correta

    const passwordMatch = await compare(password,user.password)

    if(!passwordMatch){
      throw new Error ("Email/Password incorrect")
    }

    //Gerar token
    const token = sign({
      email:user.email,
    },"7fa81ff5e6a88a34ca2392240268c68f",{subject:user.id,
    expiresIn:"1d"})
    return token;
  }
  
}
export {AuthenticateUserService}