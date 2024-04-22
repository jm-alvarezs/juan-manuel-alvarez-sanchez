const axios = require("axios");
const { ORIGIN } = require("../constants/envia");
const { findSingleProductParams } = require("../actions/products");
const { PRODUCT_NOT_FOUND } = require("../constants/products");

const getShipmentInfo = () => ({
  carrier: "estafeta",
  type: 1,
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

const PostQuote = async (req, res, next) => {
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
    console.log(data);
    const requestObject = getAuthRequestObject(url, token, data);
    const response = await axios(requestObject);
    res.status(200).send({ data: response.data });
  } catch (error) {
    next(error);
  }
};

module.exports = { PostQuote };
