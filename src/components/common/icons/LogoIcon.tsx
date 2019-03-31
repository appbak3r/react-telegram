import { FunctionComponent } from "react";
import { IconProps, makeIcon } from "../../../utils/makeIcon";
import TelegramLogo from "../../../assets/icons/logo.svg";

export const LogoIcon: FunctionComponent<IconProps> = ({ className }) =>
  makeIcon(TelegramLogo.id, className);
