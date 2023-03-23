import React from 'react'
import "./SearchResultList.css";

export default function SearchResult({result}) {
  return (
    <div className='list' onClick={(e) => alert(`You clicked on ${result.name}`)}>{result.name}</div>
  )
}
