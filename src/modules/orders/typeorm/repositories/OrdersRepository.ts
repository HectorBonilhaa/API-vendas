import { dataSource } from '@shared/typeorm/index';
import { Repository } from 'typeorm';
import Order from '../entities/Order';
import Customer from '@modules/customers/typeorm/entities/Customer';

interface IProduct {
  product_id: string;
  price: number;
  quantity: number;
}

interface IRquest {
  customer: Customer;
  products: IProduct[];
}

class OrdersRepository {
  public repository: Repository<Order>;

  constructor() {
    this.repository = dataSource.getRepository(Order);
  }

  public async findById(id: string): Promise<Order | null> {
    const order = await this.repository.findOne({
      where: {
        id,
      },
      relations: ['order_products', 'customer'],
    });

    return order;
  }

  public async createOrder({
    customer,
    products,
  }: IRquest): Promise<Order | null> {
    const order = this.repository.create({
      customer,
      order_products: products,
    });

    await this.repository.save(order);
    return order;
  }
}

export default OrdersRepository;
