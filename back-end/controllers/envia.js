const axios = require("axios");
const {
  ORIGIN,
  RATES_RESPONSE,
  GENERATE_RESPONSE,
} = require("../constants/envia");
const { findSingleProductParams } = require("../actions/products");
const { PRODUCT_NOT_FOUND } = require("../constants/products");

const getShipmentInfo = () => ({
  carrier: "estafeta",
  type: 1,
});

const getSettings = () => ({
  printFormat: "PDF",
  printSize: "STOCK_4X6",
  comments: "comentarios de el envío",
});

const getAuthRequestObject = (url, token, data) => ({
  url,
  data,
  method: "post",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const getPackageFromCatalogProduct = (catalog_product) => ({
  content: catalog_product.name,
  boxCode: "",
  amount: 1,
  type: "box",
  weight: 1,
  insurance: 0,
  declaredValue: 0,
  weightUnit: "KG",
  lengthUnit: "CM",
  dimensions: {
    length: Math.ceil(catalog_product.length),
    width: Math.ceil(catalog_product.width),
    height: Math.ceil(catalog_product.height),
  },
});

const PostRate = async (req, res, next) => {
  try {
    const { token } = req;
    const data = req.body;
    data.origin = ORIGIN;
    const { catalog_product_id } = data;
    const catalog_product = await findSingleProductParams({
      catalog_product_id,
    });
    if (catalog_product === null) {
      return res.status(404).send({ message: PRODUCT_NOT_FOUND });
    }
    const catalog_product_package =
      getPackageFromCatalogProduct(catalog_product);
    const packages = [catalog_product_package];
    data.packages = packages;
    data.shipment = getShipmentInfo();
    const url = "https://api-test.envia.com/ship/rate/";
    const requestObject = getAuthRequestObject(url, token, data);
    let response = await axios(requestObject);
    //Error recibido: "Company is not active, please contact envia.com"
    if (response.data.meta === "error") {
      response = RATES_RESPONSE;
    }
    res.status(200).send({ rates: response.data });
  } catch (error) {
    next(error);
  }
};

const PostGenerate = async (req, res, next) => {
  try {
    const { token } = req;
    const data = req.body;
    data.origin = ORIGIN;
    const { catalog_product_id } = data;
    const catalog_product = await findSingleProductParams({
      catalog_product_id,
    });
    if (catalog_product === null) {
      return res.status(404).send({ message: PRODUCT_NOT_FOUND });
    }
    const catalog_product_package =
      getPackageFromCatalogProduct(catalog_product);
    const packages = [catalog_product_package];
    data.packages = packages;
    data.settings = getSettings();
    const url = "https://api-test.envia.com/ship/generate";
    const requestObject = getAuthRequestObject(url, token, data);
    console.log(requestObject);
    let response = await axios(requestObject);
    //Error recibido: "Company is not active, please contact envia.com"
    if (response.data.meta === "error") {
      response = GENERATE_RESPONSE;
    }
    res.status(200).send({ labels: response.data });
  } catch (error) {
    next(error);
  }
};

module.exports = { PostRate, PostGenerate };
