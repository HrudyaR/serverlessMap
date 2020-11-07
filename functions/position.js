let position = {};

exports.handler = async (event) => {
  const lat = event.queryStringParameters.latitude;
  const long = event.queryStringParameters.longitude;

  position = {
    latitude: lat,
    longitude: long,
  };
  console.log(JSON.stringify(position));
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(position),
  };
};
