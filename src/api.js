const url = "https://api.coincap.io/v2";

const getAssets = async () => {
  try {
    const response = await fetch(`${url}/assets?limit=20`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(`¡Ocurrió un error con el API!: ${error}`);
  }
};

const getAsset = async (coin) => {
  try {
    const response = await fetch(`${url}/assets?/${coin}`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(`¡Ocurrió un error con el API!: ${error}`);
  }
};

const getAssetHistory = async (coin) => {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();
  try {
    const response = await fetch(
      `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(`¡Ocurrió un error con el API!: ${error}`);
  }
};

const getMarkets = async (coin) => {
  try {
    const response = await fetch(`${url}/assets/${coin}/markets?limit=5`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(`¡Ocurrió un error con el API!: ${error}`);
  }
};

const getExchange = async (id) => {
  try {
    const response = await fetch(`${url}/exchanges/${id}`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(`¡Ocurrió un error con el API!: ${error}`);
  }
};

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
};
