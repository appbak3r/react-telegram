import block from "bem-cn";
import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

export class Menu extends PureComponent {
  render() {
    const bem = block("rt-menu");

    return (
      <div className={bem()}>
        <div className={bem("items")}>
          <NavLink to={"/"}>Chat</NavLink>

          <NavLink to={"/settings"}>Settings</NavLink>
        </div>
      </div>
    );
  }
}
