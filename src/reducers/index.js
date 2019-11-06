
const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
        {
            id: 1,
            name: 'book 1',
            count: 3,
            total: 15
        },
        {
            id: 2,
            name: 'book 2',
            count: 2,
            total: 21
        }
    ],
    orderTotal: 36
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FEATCH_BOOKS_REQUEST' :
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
        case 'FEATCH_BOOKS_SUCCESS' :
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }
        case 'FEATCH_BOOKS_FAILURE' :
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        default:
            return state
    };
};

export default reducer;
