import React, { useState } from 'react';
import { Box, Heading, SimpleGrid, Select } from '@chakra-ui/react';
import { useCryptoData } from '../hooks/useCryptoData';
import { useCryptoHistory } from '../hooks/useCryptoHistory';
import CryptoCard from '../components/CryptoCard';
import PriceChart from '../components/PriceChart';
import CurrencySelector from '../components/CurrencySelector';

const CryptoDashboard = () => {
  const [selectedCrypto, setSelectedCrypto] = useState('');
  const [currency, setCurrency] = useState('usd');
  const { data: cryptos } = useCryptoData(currency);
  const { data: history } = useCryptoHistory(selectedCrypto, currency);

  return (
    <Box p={5}>
      <Heading mb={5}>Crypto Tracker</Heading>

      <Select
        placeholder="Select a cryptocurrency you want to track" 
        onChange={(e) => setSelectedCrypto(e.target.value)}
        mb={4}
      >
        {cryptos?.map((crypto) => (
          <option key={crypto.id} value={crypto.id}>
            {crypto.name}
          </option>
        ))}
      </Select>

      {selectedCrypto && history && (
        <>
          <Heading size="md" mt={5}>
            History of {selectedCrypto.toUpperCase()} ({currency.toUpperCase()})
          </Heading>
          <PriceChart history={history} />
        </>
      )}

      <CurrencySelector currency={currency} setCurrency={setCurrency} />

      <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={5}>
        {cryptos?.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} currency={currency} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CryptoDashboard;
