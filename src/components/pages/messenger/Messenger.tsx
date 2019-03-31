import block from "bem-cn";
import React, { PureComponent } from "react";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { Route, Switch } from "react-router";
import { Chat } from "../../messenger/chat/Chat";
import { Menu } from "../../messenger/menu/Menu";
import { Settings } from "../../messenger/settings/Settings";

export class Messenger extends PureComponent {
  render() {
    const bem = block("rt-messenger");

    return (
      <div className={bem()}>
        <FormattedMessage
          id={"common.pages.messenger.title"}
          defaultMessage={"Telegram"}>
          {(title) => (
            <Helmet>
              <title>{title}</title>
            </Helmet>
          )}
        </FormattedMessage>

        <div className={bem("body")}>
          <Menu />

          <Switch>
            <Route path={"/"} exact={true} component={Chat} />
            <Route path={"/settings"} exact={true} component={Settings} />
          </Switch>
        </div>
      </div>
    );
  }
}
