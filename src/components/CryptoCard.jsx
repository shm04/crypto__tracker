import React from 'react';
import { Box, Text, Badge } from '@chakra-ui/react';

const CryptoCard = ({ crypto, currency }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
      <Text fontWeight="bold">
        {crypto.name} ({crypto.symbol.toUpperCase()})
      </Text>
      <Text>
        Price: {crypto.current_price.toLocaleString()} {currency.toUpperCase()}
      </Text>
      <Badge colorScheme={crypto.price_change_percentage_24h > 0 ? 'green' : 'red'}>
        {crypto.price_change_percentage_24h.toFixed(2)}%
      </Badge>
    </Box>
  );
};

export default CryptoCard;
