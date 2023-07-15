import ProductsRepository from '../typeorm/repositories/ProductsRepository';
import Product from '../typeorm/entities/Product';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

class UpdateProductService {
  public async execute({
    id,
    name,
    price,
    quantity,
  }: IRequest): Promise<Product> {
    const productsRepository = new ProductsRepository();

    const product = await productsRepository.repository.findOne({
      where: {
        id,
      },
    });

    if (!product) {
      throw new AppError('Product not found.', 500);
    }

    product.name = name;
    product.price = price;
    product.quantity = quantity;

    await productsRepository.repository.save(product);

    return product;
  }
}

export default UpdateProductService;
