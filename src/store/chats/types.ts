import { IPhoto } from "../files/types";

export const GET_CHATS = "@rt/chats/get/fetching";
export const GET_CHATS_SUCCESS = "@rt/chats/get/success";
export const GET_CHATS_FAILURE = "@rt/chats/get/failure";

export const GET_CHAT = "@rt/chats/chat-get/fetching";
export const GET_CHAT_SUCCESS = "@rt/chats/chat-get/success";
export const GET_CHAT_FAILURE = "@rt/chats/chat-get/failure";

export type GetChatsParams = {
  limit: number;
  offsetOrder?: number;
  offsetChatId?: number;
};

export type Chat = {
  id: number;
  title: string;
  unread_count: number;
  unread_mention_count: number;
  last_message: any;
  photo: IPhoto;
};
