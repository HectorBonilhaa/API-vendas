import ProductsRepository from '../typeorm/repositories/ProductsRepository';
import Product from '../typeorm/entities/Product';
import AppError from '@shared/errors/AppError';
import RedisCache from '@shared/cache/RedisCache';

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
      throw new AppError('Product not found.', 404);
    }

    const productExists = await productsRepository.findByName(name);

    if (productExists && name !== product.name) {
      throw new AppError('There is already one product with this name', 400);
    }

    const redisCache = new RedisCache();

    await redisCache.invalidate('api-vendas-PRODUCT_LIST');

    product.name = name;
    product.price = price;
    product.quantity = quantity;

    await productsRepository.repository.save(product);

    return product;
  }
}

export default UpdateProductService;
