import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UserController {

   async create(request: Request, response: Response){
      const { name, email } = request.body;

      const usersRepository = getCustomRepository(UsersRepository)

      const user = usersRepository.create({
         name,
         email
      });

      await usersRepository.save(user);

      return response.status(201).json(user);
   }

   async show(request: Request, response: Response){
      const usersRepository = getCustomRepository(UsersRepository);

      const all = await usersRepository.find();

      return response.json(all);
   }

}

export { UserController };