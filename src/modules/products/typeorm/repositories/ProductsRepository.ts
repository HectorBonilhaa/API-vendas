import { dataSource } from '@shared/typeorm/index';
import { Repository } from 'typeorm';
import Product from '../entities/Product';

class ProductsRepository {
  public repository: Repository<Product>;

  constructor() {
    this.repository = dataSource.getRepository(Product);
  }

  public async findByName(name: string): Promise<Product | null> {
    const product = await this.repository.findOne({
      where: {
        name,
      },
    });
    return product;
  }
}

export default ProductsRepository;
