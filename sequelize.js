import { Sequelize } from "sequelize";

const sequelize = new Sequelize("ecommerce_dbb", "user1", "password", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => console.log("PostgreSQL connected!"))
  .catch((err) => console.error("Unable to connect:", err));

export default sequelize;
