import { useQuery } from '@tanstack/react-query';

const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY;

const fetchCryptoData = async (currency) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc`,
    {
      method: 'GET',
      headers: {
        'x-cg-demo-api-key': API_KEY,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Error fetching cryptocurrency data');
  }
  return response.json();
};

export const useCryptoData = (currency) => {
  return useQuery({
    queryKey: ['cryptoData', currency],
    queryFn: () => fetchCryptoData(currency),
    refetchInterval: 10000,
  });
};
