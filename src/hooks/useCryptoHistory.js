import { useQuery } from '@tanstack/react-query';

const fetchCryptoHistory = async (cryptoId, currency) => {
  const apiUrl = `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=${currency}&days=7&interval=daily`;
  const proxyUrl = `https://thingproxy.freeboard.io/fetch/${apiUrl}`;

  const response = await fetch(proxyUrl);
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
