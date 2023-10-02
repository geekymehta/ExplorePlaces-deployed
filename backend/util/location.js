const axios = require("axios");

const HttpError = require("../models/http-error");

async function getCoordsForAddress(address) {
  const response = await axios.get("http://api.positionstack.com/v1/forward", {
    params: { access_key: process.env.API_KEY, query: address },
  });

  const data = response.data;

  if (!data || data.error) {
    const error = new HttpError(
      "Could not find location for the specified address.",
      422
    );
    throw error;
  }

  const coordinates = {
    lat: data.data[0].latitude,
    lng: data.data[0].longitude,
  };

  return coordinates;
}

module.exports = getCoordsForAddress;
