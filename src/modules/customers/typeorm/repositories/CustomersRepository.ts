import { dataSource } from '@shared/typeorm/index';
import { Repository } from 'typeorm';
import Customer from '../entities/Customer';

class CustomersRepository {
  public repository: Repository<Customer>;

  constructor() {
    this.repository = dataSource.getRepository(Customer);
  }

  public async findByName(name: string): Promise<Customer | null> {
    const customer = await this.repository.findOne({
      where: {
        name,
      },
    });
    return customer;
  }
  public async findById(id: string): Promise<Customer | null> {
    const customer = await this.repository.findOne({
      where: {
        id,
      },
    });
    return customer;
  }

  public async findByEmail(email: string): Promise<Customer | null> {
    const customer = await this.repository.findOne({
      where: {
        email,
      },
    });
    return customer;
  }
}
export default CustomersRepository;
