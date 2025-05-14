import { useQuery } from '@tanstack/react-query';

const fetchCryptoData = async (currency) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc`
  );
  if (!response.ok) {
    throw new Error('Error al obtener los datos de criptomonedas');
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
