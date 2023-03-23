import React from 'react'
import SearchResult from './SearchResult';
import "./SearchResultList.css";

export default function SearchResultList({results}) {
  return (
    <div className='result-list'>
        {
            results.map((item, index) => {
                return <SearchResult result={item} key={index} />
            })
        }
    </div>
  )
}
