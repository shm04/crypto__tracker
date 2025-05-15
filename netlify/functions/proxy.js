import axios from 'axios';

export async function handler(event) {
  const { endpoint } = event.queryStringParameters;

  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/${endpoint}`);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error fetching data from CoinGecko' }),
    };
  }
}
