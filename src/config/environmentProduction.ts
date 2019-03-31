import { IEnvironment } from "./environment";
import { environmentDefault } from "./environmentDefault";

export const environmentProduction: IEnvironment = {
  ...environmentDefault,
  isLoggerEnabled: false
};
