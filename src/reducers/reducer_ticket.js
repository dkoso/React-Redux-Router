import {
    GET_TICKET,
    // SUBMIT_TICKET,
    // UPDATE_TICKET,
    // DELETE_TICKET
} from '../actions/index';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_TICKET:
            console.log('GET_TICET action.payload.data:', action.payload.data);
            console.log('GET_TICKET state:', state);
            return action.payload.data.reverse();
        // return [action.payload.data, ...state];
        // console.log(state.concat(action.payload.data));
        // return state.concat(action.payload.data);
        // const newArray = [...action.payload.data, ...state];
        // console.log(newArray);
        // return newArray;
        // case SUBMIT_TICKET:
        //     console.log('SUBMIT_TICKET state:', state);
        //     console.log('SUBMIT_TICKET action.payload.data:', action.payload.data);
        // case UPDATE_TICKET:
        //     console.log('GET_TICKET state:', state);
        //     console.log('GET_TICKET action.payload.data:', action.payload.data);
        // case DELETE_TICKET:
        //     console.log('DELETE_TICKET state:', state);
        //     console.log('DELETE_TICKET action.payload.data:', action.payload.data);
        default:
            return state;
    }
}
