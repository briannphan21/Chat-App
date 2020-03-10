import { GET_CHATS, AFTER_POST_MESSAGE } from '../_actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_CHATS:
      return { ...state, chats: action.payload };
    case AFTER_POST_MESSAGE:
      return { ...state, chat: state.chats.concat(action.payload) };
    default:
      return state;
  }
}
