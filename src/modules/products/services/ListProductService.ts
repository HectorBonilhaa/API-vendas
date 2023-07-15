import ProductsRepository from '../typeorm/repositories/ProductsRepository';
import Product from '../typeorm/entities/Product';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = new ProductsRepository();

    const products = await productsRepository.repository.find();

    return products;
  }
}

export default ListProductService;
