const models = require("./models");
const fs = require("fs");

const importFromFile = async (model) => {
  const rawData = fs.readFileSync(`${__dirname}/data/${model}.json`);
  const data = JSON.parse(rawData);
  const promises = [];
  data.forEach((object) => promises.push(models[model].create(object)));
  await Promise.all(promises);
  console.log(`${model} imported.`);
};

const seedDatabase = async () => {
  console.log("Emptying Database...");
  await models.sequelize.sync({ force: true });
  console.log("Seeding database...");
  await importFromFile("users");
  await importFromFile("access_tokens");
  await importFromFile("catalog_products");
  console.log("Database synced.");
};

module.exports = { seedDatabase };
