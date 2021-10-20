import axios from 'axios';

const cryptoAPIInstance = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

const exchangeRateAPIInstance = axios.create({
  baseURL: 'https://v6.exchangerate-api.com/v6/0990d061e9a2e3714e5259e3',
});

export const getCurrentCryptoPrices = async (): Promise<unknown> => {
  try {
    const data = await cryptoAPIInstance({
      method: 'GET',
      url: '/simple/price?ids=litecoin,bitcoin,ethereum,dogecoin,ripple&vs_currencies=usd',
    });
    return data.data;
  } catch (err) {
    throw err;
  }
};

export const getCurrentExcangeRates = async (): Promise<unknown> => {
  try {
    const data = await exchangeRateAPIInstance({
      method: 'GET',
      url: '/latest/USD',
    });
    return data.data;
  } catch (error) {
    throw error;
  }
};
