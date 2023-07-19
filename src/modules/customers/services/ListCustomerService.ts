import Customer from '../typeorm/entities/Customer';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

interface IPaginateCustomer {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
  data: Customer[];
}

class ListCustomerService {
  public async execute(
    page: number,
    per_page: number,
  ): Promise<IPaginateCustomer | undefined> {
    const customersRepository = new CustomersRepository();

    try {
      const skip = (page - 1) * per_page || 0;
      const [customers, total] =
        await customersRepository.repository.findAndCount({
          skip,
          take: per_page,
        });

      const from = skip + 1;
      const to = skip + customers.length;

      const total_pages = Math.ceil(total / per_page);

      const current_page = page;
      let prev_page: number | null = null;
      if (current_page > 1) {
        prev_page = current_page - 1;
      }

      let next_page: number | null = null;
      if (current_page < total_pages) {
        next_page = current_page + 1;
      }

      const result: IPaginateCustomer = {
        from,
        to,
        per_page,
        total,
        current_page,
        prev_page,
        next_page,
        data: customers,
      };

      return result;
    } catch (error) {
      console.error('Error while fetching paginated customers:', error);
      throw error;
    }
  }
}
export default ListCustomerService;
