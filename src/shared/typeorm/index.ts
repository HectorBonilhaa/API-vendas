import { DataSource } from 'typeorm';
import { CreateProducts1607437608841 } from './migrations/1689360387682-CreateProducts';
import { CreateUsers1689532761946 } from './migrations/1689532761946-CreateUsers';
import { CreateUserTokens1689597162328 } from './migrations/1689597162328-CreateUserTokens';
import { CreateCustomers1689632565532 } from './migrations/1689632565532-CreateCustomers';

import Product from '@modules/products/typeorm/entities/Product';
import User from '@modules/users/typeorm/entities/User';
import UserToken from '@modules/users/typeorm/entities/UserToken';
import Customers from '@modules/customers/typeorm/entities/Customer';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'vanin2004',
  database: 'apivendas',
  entities: [Product, User, UserToken, Customers],
  migrations: [
    CreateProducts1607437608841,
    CreateUsers1689532761946,
    CreateUserTokens1689597162328,
    CreateCustomers1689632565532,
  ],
});
