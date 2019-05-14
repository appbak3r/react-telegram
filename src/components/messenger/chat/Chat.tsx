import block from "bem-cn";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ChatsState } from "../../../store/chats/reducer";
import { RootState } from "../../../store/reducer";
import { DialogPreview } from "./dialog-preview/DialogPreview";
import InfiniteScroll from "react-infinite-scroll-component";
import "./styles.scss";

type OwnProps = {};
type StateProps = {
  chats: ChatsState;
};
type ChatProps = OwnProps & StateProps;

const mapStateToProps = (state: RootState) => {
  return {
    chats: state.chats
  };
};

@((connect as any)(mapStateToProps))
class ConnectedChat extends PureComponent<ChatProps> {
  render() {
    const bem = block("rt-chat");
    const { chatIds } = this.props.chats;

    return (
      <div className={bem()}>
        <InfiniteScroll
          dataLength={chatIds.length}
          hasMore={false}
          loader={() => {}}
          next={() => {}}>
          {chatIds.map((chatId) => {
            return <DialogPreview key={chatId} chatId={chatId} />;
          })}
        </InfiniteScroll>

        <div className={bem("body")} />
      </div>
    );
  }
}

export const Chat = (ConnectedChat as unknown) as React.ComponentClass<
  OwnProps
>;
