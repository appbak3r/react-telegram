import block from "bem-cn";
import React, { PureComponent } from "react";

type OwnProps = {
  message: any;
};

export class LastMessage extends PureComponent<OwnProps> {
  private getContent(): string {
    const { message } = this.props;
    console.log(message);

    if (message.content.text) {
      if (message.content.text.text.length > 65) {
        return message.content.text.text.slice(0, 65) + "...";
      } else {
        return message.content.text.text;
      }
    } else {
      return "not text";
    }
  }

  render() {
    const bem = block("rt-last-message");

    return <div className={bem()}>{this.getContent()}</div>;
  }
}
