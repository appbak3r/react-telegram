import block from "bem-cn";
import React, { PureComponent } from "react";
import { LogoutButton } from "../../auth/logout-button/LogoutButton";

export class Settings extends PureComponent {
  render() {
    const bem = block("rt-settings");

    return (
      <div className={bem()}>
        <LogoutButton />
      </div>
    );
  }
}
