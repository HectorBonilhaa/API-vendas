import ProductsRepository from '../typeorm/repositories/ProductsRepository';
import Product from '../typeorm/entities/Product';
interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

class CreateProductService {
  public async execute({ name, price, quantity }: IRequest): Promise<Product> {
    const productsRepository = new ProductsRepository();

    const product = productsRepository.repository.create({
      name,
      price,
      quantity,
    });

    await productsRepository.repository.save(product);

    return product;
  }
}

export default CreateProductService;
