import { useQuery } from '@tanstack/react-query';

const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY;

const fetchCryptoHistory = async (cryptoId, currency) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=${currency}&days=7&interval=daily`,
    {
      method: 'GET',
      headers: {
        'x-cg-demo-api-key': API_KEY,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Error fetching historical prices');
  }
  return response.json();
};

export const useCryptoHistory = (cryptoId, currency) => {
  return useQuery({
    queryKey: ['cryptoHistory', cryptoId, currency],
    queryFn: () => fetchCryptoHistory(cryptoId, currency),
    enabled: !!cryptoId,
  });
};
