import block from "bem-cn";
import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";

export class Menu extends PureComponent {
  render() {
    const bem = block("rt-menu");

    return (
      <div className={bem()}>
        <NavLink to={"/"}>Chat</NavLink>

        <NavLink to={"/settings"}>Settings</NavLink>
      </div>
    );
  }
}
