import { createContext, useContext, useReducer } from 'react'
const State = createContext();
export const StateProvider = ({ initialState, reducer, children }) => (
    <State.Provider value={useReducer(reducer, initialState)}>
        {children}
    </State.Provider>
)
export const useStateValue = () => useContext(State)