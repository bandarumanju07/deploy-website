import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const Product = sequelize.define("Product", {
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  price: DataTypes.FLOAT,
  stock: DataTypes.INTEGER,
});

export default Product;
