import block from "bem-cn";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { GetChatAction } from "../../../../store/chats/actions";
import { chatSelector } from "../../../../store/chats/selectors";
import { Chat } from "../../../../store/chats/types";
import { RootState } from "../../../../store/reducer";
import "./styles.scss";
import { LastMessage } from "../last-message/LastMessage";

type OwnProps = {
  chatId: number;
};

type StateProps = {
  chat: Chat;
};
type DispatchProps = {
  getChat: typeof GetChatAction;
};

type DialogPreviewProps = OwnProps & StateProps & DispatchProps;

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {
    chat: chatSelector(ownProps.chatId)(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ getChat: GetChatAction }, dispatch);
};

@((connect as any)(mapStateToProps, mapDispatchToProps))
class ConnectedDialogPreview extends PureComponent<DialogPreviewProps> {
  componentDidMount(): void {
    const { chat, chatId } = this.props;

    if (!chat) {
      this.props.getChat(chatId);
    }
  }

  render() {
    const bem = block("rt-dialog-preview");

    const { chat } = this.props;

    const { title, unread_count, last_message } = chat || ({} as any);

    return (
      <div className={bem()}>
        <div className={bem("photo")} />

        <div className={bem("title")}>{title}</div>

        {last_message && (
          <div className={bem("message")}>
            <LastMessage message={last_message} />
          </div>
        )}

        {unread_count > 0 && (
          <div className={bem("unread")}>{unread_count}</div>
        )}
      </div>
    );
  }
}

export const DialogPreview = (ConnectedDialogPreview as unknown) as React.ComponentClass<
  OwnProps
>;
