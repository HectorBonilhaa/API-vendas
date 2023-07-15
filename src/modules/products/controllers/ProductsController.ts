import { Request, Response } from 'express';
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';
import CreateProductService from '../services/CreateProductService';
import UpdateProductService from '../services/UpdateProductService';
import DeleteProductService from '../services/DeleteProductService';
import ProductsRepository from '../typeorm/repositories/ProductsRepository';

export default class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProducts = new ListProductService();

    const products = await listProducts.execute();

    return response.json(products);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showProduct = new ShowProductService();

    try {
      const product = await showProduct.execute({ id });

      if (!product) {
        return response.status(404).json({
          message: `Product not found, you are search for the product: ${id}`,
          status: 404,
        });
      }

      return response.json(product);
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const createProduct = new CreateProductService();
    const productsRepository = new ProductsRepository();

    try {
      const productExists = await productsRepository.findByName(name);

      if (productExists) {
        return response.status(400).json({
          message: `There is already one product whith this name: ${name}`,
          status: 400,
        });
      }
      const product = await createProduct.execute({
        name,
        price,
        quantity,
      });
      return response.json(product);
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;
    const { id } = request.params;

    const productsRepository = new ProductsRepository();

    try {
      const product = await productsRepository.repository.findOne({
        where: {
          id,
        },
      });

      if (!product) {
        return response.status(404).json({
          message: `Product not found, you are searching for the product: ${id}`,
          status: 404,
        });
      }

      const productWithSameName = await productsRepository.findByName(name);

      if (productWithSameName && productWithSameName.id !== id) {
        return response.status(400).json({
          message: `There is already a product with this name: ${name}`,
          status: 400,
        });
      }

      const updateProduct = new UpdateProductService();
      const updatedProduct = await updateProduct.execute({
        id,
        name,
        price,
        quantity,
      });

      return response.json(updatedProduct);
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletedProduct = new DeleteProductService();
    const productsRepository = new ProductsRepository();

    try {
      const product = await productsRepository.repository.findOne({
        where: {
          id,
        },
      });

      if (!product) {
        return response.status(404).json({
          message: `Product not found, you are search for the product: ${id}`,
          status: 404,
        });
      }
      await deletedProduct.execute({ id });

      return response.json([]);
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: 'Internal server error',
      });
    }
  }
}
