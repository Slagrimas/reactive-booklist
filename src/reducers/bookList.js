import { LOAD_BOOKS } from "../actions/bookActions";
import { ADD_BOOK } from "../actions/bookActions";

const initialState = [];

const bookList = ( state = initialState, action) => {
switch (action.type) {
    case LOAD_BOOKS:
        return [ ...action.books ]; //same as state = [...action.books] return state

    case ADD_BOOK:
       return [ ...state, action.book] 
       default:
    return state
     
}
}

export default bookList;