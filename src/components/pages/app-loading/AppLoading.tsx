import React, { PureComponent } from "react";
import { FormattedMessage } from "react-intl";
import { Logo } from "../../common/logo/Logo";
import "./styles.scss";

export class AppLoading extends PureComponent {
  render() {
    return (
      <div className="rt-app-loading">
        <div className="rt-app-loading__body">
          <Logo
            title={
              <FormattedMessage
                id={"components.app-loading.title"}
                defaultMessage={"a new era of messaging"}
              />
            }
          />
        </div>
      </div>
    );
  }
}
