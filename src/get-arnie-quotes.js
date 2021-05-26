const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  try {
    const responses = await Promise.all(urls.map(url => httpGet(url)));

    return responses.map(response => response.status === 200
      ? { 'Arnie Quote': (JSON.parse(response.body)).message }
      : { 'FAILURE': (JSON.parse(response.body)).message }
    );
  } catch (err) {
    return [{ 'FAILURE': `Probably some generic message, not ${err.message}` }];
  }
};

module.exports = {
  getArnieQuotes,
};
