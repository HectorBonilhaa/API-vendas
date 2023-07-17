import { dataSource } from '@shared/typeorm/index';
import { Repository } from 'typeorm';
import User from '../entities/User';

class UsersRepository {
  public repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  public async findByName(name: string): Promise<User | null> {
    const user = await this.repository.findOne({
      where: {
        name,
      },
    });
    return user;
  }
  public async findById(id: string): Promise<User | null> {
    const user = await this.repository.findOne({
      where: {
        id,
      },
    });
    return user;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    });
    return user;
  }
}
export default UsersRepository;
