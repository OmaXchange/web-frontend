import { FC, ReactElement } from 'react';
import { useQuery } from 'react-query';
import {
  getCurrentCryptoPrices,
  getCurrentExcangeRates,
} from '../../../../api';
import styles from '../index.module.css';

const CryptoConverter: FC = (): ReactElement => {
  const cryptoCurrencies = [
    {
      name: 'Bitcoin',
      apiId: 'bitcoin',
    },
    {
      name: 'Ethereum',
      apiId: 'ethereum',
    },
    {
      name: 'Dogecoin',
      apiId: 'dogecoin',
    },
    {
      name: 'XRP',
      apiId: 'ripple',
    },
    {
      name: 'Litecoin',
      apiId: 'litecoin',
    },
  ];

  const currencies = [
    {
      name: 'Naira',
    },
    {
      name: 'Dollars',
    },
  ];

  const crypoQuery = useQuery('crypto', getCurrentCryptoPrices);
  const exchangeRatesQuery = useQuery('exchangeRates', getCurrentExcangeRates);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
      <div className="flex flex-col items-start">
        <select
          name="currencies"
          id="currencies"
          className={`bg-transparent text-customGray font-bold outline-none ${styles.dropdown}`}
        >
          {currencies &&
            currencies.map((currency, index) => (
              <option
                key={`${currency.name}-${index}`}
                className="bg-transparent text-customGray"
                value="dollars"
              >
                {currency.name}
              </option>
            ))}
        </select>
        <input
          type="number"
          name="baseCurrency"
          id="baseCurrency"
          disabled={exchangeRatesQuery.isLoading}
          className={`bg-transparent border border-customGray text-white font-bold pt-7 pb-5 px-2 rounded-lg outline-none lg:text-xl ${styles.currencyInput}`}
        />
      </div>
      <div className="text-3xl lg:text-4xl relative top-3 text-center hidden sm:hidden lg:block">
        =
      </div>
      <div className="flex flex-col items-start">
        <select
          name="currencies"
          id="currencies"
          className={`bg-transparent text-customGray font-bold outline-none ${styles.dropdown}`}
        >
          {cryptoCurrencies &&
            cryptoCurrencies.map((currency, index) => (
              <option
                key={`${currency.name}-${index}`}
                className="bg-transparent text-customGray px-2"
                value="dollars"
              >
                {currency.name}
              </option>
            ))}
        </select>
        <input
          type="number"
          name="baseCurrency"
          id="baseCurrency"
          disabled={crypoQuery.isLoading}
          className={`bg-transparent border border-customGray text-white font-bold pt-7 pb-5 px-2 rounded-lg outline-none lg:text-xl ${styles.currencyInput}`}
        />
      </div>
    </div>
  );
};

export default CryptoConverter;
