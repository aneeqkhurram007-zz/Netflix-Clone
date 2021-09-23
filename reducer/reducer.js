export default function reducer(state, action) {
    switch (action.type) {
        case "Login":
            state = { ...state, user: action.payload }
            console.log(state);
            return state;
        case "Logout":
            return { ...state, user: null }
        default:
            return state;
    }
}