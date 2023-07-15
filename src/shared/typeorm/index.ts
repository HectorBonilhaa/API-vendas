import { DataSource } from 'typeorm';
import { CreateProducts1607437608841 } from './migrations/1689360387682-CreateProducts';
import Product from '@modules/products/typeorm/entities/Product';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'vanin2004',
  database: 'apivendas',
  entities: [Product],
  migrations: [CreateProducts1607437608841],
});
