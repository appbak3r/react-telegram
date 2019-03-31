import { environmentDefault } from "./environmentDefault";
import { environmentProduction } from "./environmentProduction";

export interface IEnvironment {
  apiId: string;
  apiHash: string;
  isLoggerEnabled: boolean;
  useTestDC: boolean;
}

export let environment: IEnvironment = {
  ...environmentDefault
};

if (process.env.NODE_ENV === "production") {
  environment = {
    ...environmentProduction
  };
}
