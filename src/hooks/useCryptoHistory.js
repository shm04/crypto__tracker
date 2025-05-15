import { useQuery } from '@tanstack/react-query';

const fetchCryptoHistory = async (cryptoId, currency) => {
  // Construir el endpoint sin encodeURIComponent
  const endpoint = `coins/${cryptoId}/market_chart?vs_currency=${currency}&days=7&interval=daily`;
  
  // Hacer la solicitud al proxy
  const response = await fetch(`/api/proxy?endpoint=${endpoint}`);

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
