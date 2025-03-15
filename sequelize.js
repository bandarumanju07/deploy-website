import { Sequelize } from "sequelize";

const sequelize = new Sequelize('graph', 'neondb_owner', 'npg_LP0bfzVa7hyW', {
  host: 'ep-solitary-boat-a5thgwk3-pooler.us-east-2.aws.neon.tech',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // For self-signed certificates if needed
    },
  },
});

sequelize
  .authenticate()
  .then(() => console.log("PostgreSQL connected!"))
  .catch((err) => console.error("Unable to connect:", err));

export default sequelize;
