import block from "bem-cn";
import React from "react";
import { FormattedMessage } from "react-intl";
import { LogoIcon } from "../icons/LogoIcon";
import "./logo.scss";

type LogoProps = {
  title?: string | React.ReactNode;
};

export const Logo: React.FunctionComponent<LogoProps> = ({ title }) => {
  const bem = block("rt-logo");

  return (
    <div className={bem()}>
      <LogoIcon className={bem("icon")} />

      <div className={bem("title")}>
        <FormattedMessage
          id={"components.logo.title"}
          defaultMessage={"Telegram"}
        />
      </div>

      {title && <div className={bem("subtitle")}>{title}</div>}
    </div>
  );
};
