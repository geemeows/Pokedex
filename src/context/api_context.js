import React, { useState } from 'react'

export const APIContext = React.createContext({
    offset: 0,
    limit: 10,
    nextOffset: () => {}
})

const APIContextProvider = ({ children }) => {
    const [offset, setOffset] = useState(0)
    const nextOffset = () => {
        setOffset(offset + 10)
    }
    return(
        <APIContext.Provider value={{ offset, limit: 10, nextOffset }}>
            { children }
        </APIContext.Provider>
    )
}
export default APIContextProvider