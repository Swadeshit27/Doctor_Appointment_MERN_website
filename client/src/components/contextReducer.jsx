import React, { createContext, useContext, useReducer } from 'react'
const cartStateContext = createContext();
const cartDispatch = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: action._id, name: action.name, phone: action.phone, specialist: action.specialist, date: action.date, fee: action.fee }]
        case "DROP":
            let emptyArr = [];
            return emptyArr
        default: console.log("error occur")
    }
}

export const ContextReducer = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <div>
            <cartDispatch.Provider value={dispatch}>
                <cartStateContext.Provider value={state}>
                    {children}
                </cartStateContext.Provider>
            </cartDispatch.Provider>
        </div>
    )
}
export const useCart = () => useContext(cartStateContext)
export const useDispatch = () => useContext(cartDispatch)
