import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

class ListUserService {
  public async execute(): Promise<User[]> {
    const usersRepository = new UsersRepository();

    const users = await usersRepository.repository.find();

    return users;
  }
}

export default ListUserService;
