import { dataSource } from '@shared/typeorm/index';
import { In, Repository } from 'typeorm';
import Product from '../entities/Product';

interface IFindProducts {
  id: string;
}

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
  public async findAllByIds(products: IFindProducts[]): Promise<Product[]> {
    const productIds = products.map(product => product.id);

    const existsProducts = await this.repository.find({
      where: {
        id: In(productIds),
      },
    });

    return existsProducts;
  }
}

export default ProductsRepository;
