import axios from 'axios';

export const SUBMIT_TICKET = 'SUBMIT_TICKET';
export const GET_TICKET = 'GET_TICKET';
export const UPDATE_TICKET = 'UPDATE_TICKET';
export const DELETE_TICKET = 'DELETE_TICKET';
export const CLICK_ID = 'CLICK_ID';

const URL = 'http://192.168.2.60:3000/users';

export function submitTicket(ticket, callback) {
    const submit = axios.post(URL, ticket)
        .then(() => callback());

    return {
        type: SUBMIT_TICKET,
        payload: submit
    };
}

export function getTicket() {
    const get = axios.get(URL);

    return {
        type: GET_TICKET,
        payload: get
    };
}

export function updateTicket({ id, data }, callback) {
    const update = axios.put(`${URL}/${id}`, data)
        .then(() => callback());

    return {
        type: UPDATE_TICKET,
        payload: update
    };
}

export function deleteTicket(id, callback) {
    const remove = axios.delete(`${URL}/${id}`)
        .then(() => callback());

    return {
        type: DELETE_TICKET,
        payload: remove
    };
}

export function getClickID(id) {
    return {
        type: CLICK_ID,
        payload: id
    };
}

