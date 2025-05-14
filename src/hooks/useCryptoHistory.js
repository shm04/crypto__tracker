import { useQuery } from '@tanstack/react-query';

const fetchCryptoHistory = async (cryptoId, currency) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=${currency}&days=7&interval=daily`
  );
  if (!response.ok) {
    throw new Error('Error al obtener el historial de precios');
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
