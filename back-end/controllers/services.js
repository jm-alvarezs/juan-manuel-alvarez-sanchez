const axios = require("axios");

const getAuthRequestObject = (url, token, data) => ({
  url,
  data,
  method: "post",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const PostQuote = async (req, res, next) => {
  try {
    const { token } = req;
    const data = req.body;
    const url = "https://api-test.envia.com/ship/rate/";
    const requestObject = getAuthRequestObject(url, token, data);
    const response = await axios(requestObject);
    res.status(200).send({ data: response.data });
  } catch (error) {
    next(error);
  }
};

module.exports = { PostQuote };
