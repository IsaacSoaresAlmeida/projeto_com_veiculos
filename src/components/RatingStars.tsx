
import React from 'react'
export default function RatingStars({value=5}:{value:number}){
  return <div>{Array.from({length:5}).map((_,i)=> <span key={i}>{i<value?'★':'☆'}</span>)}</div>
}
