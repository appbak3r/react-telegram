import block from "bem-cn";
import React, { PureComponent } from "react";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import { bindActionCreators, Dispatch } from "redux";
import { GetChatsAction } from "../../../store/chats/actions";
import { Chat } from "../../messenger/chat/Chat";
import { Menu } from "../../messenger/menu/Menu";
import { Settings } from "../../messenger/settings/Settings";

type OwnProps = {};
type DispatchProps = {
  getChats: typeof GetChatsAction;
};

type MessengerProps = OwnProps & DispatchProps;

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getChats: GetChatsAction
    },
    dispatch
  );
};

@((connect as any)(null, mapDispatchToProps))
class ConnectedMessenger extends PureComponent<MessengerProps> {
  componentDidMount(): void {
    this.props.getChats({
      limit: 25
    });
  }

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

export const Messenger = (ConnectedMessenger as unknown) as React.ComponentClass<
  OwnProps
>;
