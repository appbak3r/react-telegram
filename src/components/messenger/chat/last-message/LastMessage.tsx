import block from "bem-cn";
import React, { PureComponent } from "react";

type OwnProps = {
  message: any;
};

export class LastMessage extends PureComponent<OwnProps> {
  private getContent(): string {
    const { message } = this.props;

    return message.content.text ? message.content.text.text : "not text";
  }

  render() {
    const bem = block("rt-last-message");

    return <div className={bem()}>{this.getContent()}</div>;
  }
}
