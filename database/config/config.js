const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../../.env") });
module.exports = {
  development: {
    url: process.env.DB_URL,
    dialect: "postgres"
  },
  test: {
    url: process.env.QA_DATABASE_URL,
    dialect: "postgres"
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres"
  }
};
