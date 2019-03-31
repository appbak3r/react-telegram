import { IEnvironment } from "./environment";

const apiId = process.env.REACT_APP_TELEGRAM_API_ID;
const apiHash = process.env.REACT_APP_TELEGRAM_API_HASH;

if (!apiId || !apiHash) {
  throw new Error("api_id and api_hash are not defined");
}

export const environmentDefault: IEnvironment = {
  apiId,
  apiHash,
  isLoggerEnabled: true,
  useTestDC: !process.env.REACT_APP_TELEGRAM_PRODUCTION_DC
};
