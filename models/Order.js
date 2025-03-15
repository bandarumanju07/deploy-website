import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";
import Product from "./Product.js";
import User from "./User.js";

const Order = sequelize.define("Order", {
  status: DataTypes.STRING,
});

// Relations
User.hasMany(Order);
Order.belongsTo(User);
Order.belongsToMany(Product, { through: "OrderProducts" });
Product.belongsToMany(Order, { through: "OrderProducts" });

export default Order;
