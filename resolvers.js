import  Product  from "./models/Product.js";
import  User  from "./models/User.js";
import  Order from "./models/Order.js";
// ecommerce-backend/resolvers.js
export const resolvers = {
  Query: {
    products: () => Product.findAll(),
    product: (_, { id }) => Product.findByPk(id),
    users: () => User.findAll(),
    orders: () => Order.findAll(),
  },
  Mutation: {
    createProduct: (_, args) => Product.create(args),
    createUser: (_, args) => User.create(args),
    createOrder: async (_, { userId, status, productIds }) => {
      const order = await Order.create({ userId, status });
      const products = await Product.findAll({ where: { id: productIds } });
      await order.addProducts(products);
      return order;
    },
  },
  Order: {
    user: (order) => User.findByPk(order.userId),
    products: (order) => order.getProducts(),
  },
  User: {
    orders: (user) => user.getOrders(),
  },
};
