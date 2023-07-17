import { dataSource } from '@shared/typeorm/index';
import { Repository } from 'typeorm';
import UserToken from '../entities/UserToken';

class UserTokensRepository {
  public repository: Repository<UserToken>;

  constructor() {
    this.repository = dataSource.getRepository(UserToken);
  }

  public async findByToken(token: string): Promise<UserToken | null> {
    const userToken = await this.repository.findOne({
      where: {
        token,
      },
    });
    return userToken;
  }

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = await this.repository.create({
      user_id,
    });
    await this.repository.save(userToken);
    return userToken;
  }
}
export default UserTokensRepository;
