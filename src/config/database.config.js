const { config } = require('dotenv');
config();

const sequelizeConfig = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
};

// Verifique se a URL está correta
if (process.env.DATABASE_URL) {
    sequelizeConfig.url = process.env.DATABASE_URL;
} else {
    sequelizeConfig.host = process.env.DB_HOST;
    sequelizeConfig.database = process.env.DB_DATABASE;
    sequelizeConfig.username = process.env.DB_USER;
    sequelizeConfig.password = process.env.DB_PASSWORD;
    sequelizeConfig.port = process.env.DB_PORT;
    sequelizeConfig.dialect = process.env.DB_DIALECT;
}

module.exports = sequelizeConfig;
