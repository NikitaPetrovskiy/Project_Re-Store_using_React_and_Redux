
const initialState = {
    books: [
        {id: 1, title: `You don't known JS`, author: `kyle simpson`},
        {id: 2, title: `React in action`, author: `Mark Tielens Thomas`},
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED' :
            return {
                books: action.payload
            }
        default:
            return state
    };
};

export default reducer;
