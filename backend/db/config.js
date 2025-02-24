import { Sequelize } from "sequelize";

const sequelize = new Sequelize("proyectoappoliver", "root", "Romu1983", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        require: 30000,
        idle: 10000,
    },
    define: {
        timestamps: true,
    },
    logging: false,
});

export default sequelize;