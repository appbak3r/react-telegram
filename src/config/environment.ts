interface Environment {
  apiId: string;
  apiHash: string;
}

export const environment: Environment = {
  apiId: process.env.REACT_APP_TELEGRAM_API_ID || '',
  apiHash: process.env.REACT_APP_TELEGRAM_API_HASH || '',
};
