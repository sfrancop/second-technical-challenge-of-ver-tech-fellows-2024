import React from 'react'
import { api_consumer } from './api_consumer'

function Result() {
    const result = api_consumer()[0]
    return (
        <div>{result.average}</div>
    )
}

export default Result