

export const CoinList = (currency,pagination=100) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${pagination}&page=1&sparkline=false`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalWeekChart = (id, days, currency,interval) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`;

export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

export const searchCoins = (query) => 
  `https://api.coingecko.com/api/v3/search?query=${query}`;

export const get_price = (ids,currency)=>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${ids}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const klines = (coin,curr,days)=>
  `https://api.coingecko.com/api/v3/coins/${coin}/ohlc?vs_currency=${curr}&days=${days}`