import AppError from '@shared/errors/AppError';
import Customer from '../typeorm/entities/Customer';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
}

class UpdateCustomerService {
  public async execute({ id, name, email }: IRequest): Promise<Customer> {
    const custumersRepository = new CustomersRepository();

    const customer = await custumersRepository.findById(id);

    if (!customer) {
      throw new AppError('User not found.');
    }

    const custumerExists = await custumersRepository.findByEmail(email);

    if (custumerExists && email !== customer.email) {
      throw new AppError('There is already one user with this email.');
    }

    customer.name = name;
    customer.email = email;

    await custumersRepository.repository.save(customer);

    return customer;
  }
}

export default UpdateCustomerService;
