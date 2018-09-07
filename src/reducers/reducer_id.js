import { CLICK_ID } from '../actions/index';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CLICK_ID:
            return action.payload;
        default:
            return state;
    }
}
