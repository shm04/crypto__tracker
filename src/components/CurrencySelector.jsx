import React from 'react';
import { Select } from '@chakra-ui/react';

const CurrencySelector = ({ currency, setCurrency }) => {
  const currencies = ['usd', 'eur', 'mxn', 'gbp', 'jpy'];

  return (
    <Select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      placeholder="Select currency"
      mb={4}
    >
      {currencies.map((cur) => (
        <option key={cur} value={cur}>
          {cur.toUpperCase()}
        </option>
      ))}
    </Select>
  );
};

export default CurrencySelector;
