import ProductsRepository from '../typeorm/repositories/ProductsRepository';
import Product from '../typeorm/entities/Product';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

class CreateProductService {
  public async execute({ name, price, quantity }: IRequest): Promise<Product> {
    const productsRepository = new ProductsRepository();
    const productExists = await productsRepository.findByName(name);

    if (productExists) {
      throw new AppError('There is already one product with this name', 400);
    }

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
