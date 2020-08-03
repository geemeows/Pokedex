import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const APIContext = React.createContext({
  offset: 0,
  limit: 10,
  nextOffset: () => {},
  prevOffset: () => {}
})

const APIContextProvider = ({ children }) => {
  const [offset, setOffset] = useState(0)
  const limit = 10

  const nextOffset = () => {
    setOffset(offset + limit)
  }
  const prevOffset = () => {
    if (offset >= limit) setOffset(offset - limit)
  }
  return (
    <APIContext.Provider value={{
      offset, limit, nextOffset, prevOffset
    }}
    >
      { children }
    </APIContext.Provider>
  )
}
APIContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
export default APIContextProvider
