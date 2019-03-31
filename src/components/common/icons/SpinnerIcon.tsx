import React, { FunctionComponent } from "react";
import { IconProps, makeIcon } from "../../../utils/makeIcon";
import spinnerIcon from "../../../assets/icons/spinner.svg";

export const SpinnerIcon: FunctionComponent<IconProps> = ({ className }) =>
  makeIcon(spinnerIcon.id, className);
