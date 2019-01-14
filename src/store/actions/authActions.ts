import { TelegramMessageSendActionType } from './telegramActions';
import { actionType } from '../../utils/actionType';
import { asyncSendMessage } from '../sagas/telegramSaga';

const LogoutActionTypes = actionType('logout');

export const logout = () => {
  return (dispatch: any) => {
    dispatch({
      type: LogoutActionTypes.FETCHING,
    });
    
    return asyncSendMessage({ '@type': 'logOut' })
      .then((data) => {
        console.log(data);
      });
  };
};

export interface AuthActions {
  logout: () => (dispatch: any) => void;
}
