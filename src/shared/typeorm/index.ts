import { DataSource } from 'typeorm';
import { CreateProducts1607437608841 } from './migrations/1689360387682-CreateProducts';
import { CreateUsers1689532761946 } from './migrations/1689532761946-CreateUsers';
import { CreateUserTokens1689597162328 } from './migrations/1689597162328-CreateUserTokens';
import { CreateCustomers1689632565532 } from './migrations/1689632565532-CreateCustomers';

import Product from '@modules/products/typeorm/entities/Product';
import User from '@modules/users/typeorm/entities/User';
import UserToken from '@modules/users/typeorm/entities/UserToken';
import Customers from '@modules/customers/typeorm/entities/Customer';
import { CreateOrders1689682023299 } from './migrations/1689682023299-CreateOrders';
import { AddCustomerIdToOrders1689682388159 } from './migrations/1689682388159-AddCustomerIdToOrders';
import { CreateOrdersProducts1689683124558 } from './migrations/1689683124558-CreateOrdersProducts';
import { AddOrderIdToOrdersProducts1689683573418 } from './migrations/1689683573418-AddOrderIdToOrdersProducts';
import { AddProductIdToOrdersProducts1689684004151 } from './migrations/1689684004151-AddProductIdToOrdersProducts';
import Order from '@modules/orders/typeorm/entities/Order';
import OrdersProducts from '@modules/orders/typeorm/entities/OrdersProducts';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'suasenha',
  database: 'apivendas',
  entities: [Product, User, UserToken, Customers, Order, OrdersProducts],
  migrations: [
    CreateProducts1607437608841,
    CreateUsers1689532761946,
    CreateUserTokens1689597162328,
    CreateCustomers1689632565532,
    CreateOrders1689682023299,
    AddCustomerIdToOrders1689682388159,
    CreateOrdersProducts1689683124558,
    AddOrderIdToOrdersProducts1689683573418,
    AddProductIdToOrdersProducts1689684004151,
  ],
});
