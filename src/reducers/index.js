import { combineReducers } from 'redux';

import TicketReducer from './reducer_ticket';
import IDReducer from './reducer_id';

const rootReducer = combineReducers({
    ticket: TicketReducer,
    id: IDReducer
});

export default rootReducer;
