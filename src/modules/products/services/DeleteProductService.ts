import ProductsRepository from '../typeorm/repositories/ProductsRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

class DeleteProductService {
  public async execute({ id }: IRequest): Promise<void> {
    const productsRepository = new ProductsRepository();

    const product = await productsRepository.repository.findOne({
      where: {
        id,
      },
    });

    if (!product) {
      throw new AppError('Product not found.', 404);
    }
    await productsRepository.repository.remove(product);
  }
}

export default DeleteProductService;
