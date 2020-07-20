import React from 'react'
import { useLocation } from 'react-router-dom'
import { queryParser } from '@utils/helpers'

const Pokemon = (props) => {
    const { search } = useLocation()
    console.log(queryParser(search))
    return (
        <div>
            
        </div>
    )
}
export default Pokemon