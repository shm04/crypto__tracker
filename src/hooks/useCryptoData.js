import { useQuery } from '@tanstack/react-query';

const fetchCryptoData = async (currency) => {
  const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc`;
  const proxyUrl = `https://thingproxy.freeboard.io/fetch/${apiUrl}`;

  const response = await fetch(proxyUrl);
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
