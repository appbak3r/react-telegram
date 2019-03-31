import block from "bem-cn";
import React, { PureComponent } from "react";

export class Chat extends PureComponent {
  render() {
    const bem = block("rt-chat");

    return <div className={bem()} />;
  }
}
