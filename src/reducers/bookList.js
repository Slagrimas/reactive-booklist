import { LOAD_BOOKS } from "../actions/bookActions";

const initialState = [];

const bookList = ( state = initialState, action) => {
switch (action.type) {
    case LOAD_BOOKS:
        return [ ...action.books ]; //same as state = [...action.books] return state
    default:
    return state;
     
}
}

export default bookList;