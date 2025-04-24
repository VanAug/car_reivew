import React from 'react'
import Car from '../Car/Car'
import Search from '../Search/Search'

const DisplayCars = () => {
  const truncate = (text,limit) =>{
    return text.length > limit?  text.slice(0,limit) + 'readmore' : text
  } 
  
  return (
    <div>
      <Car />
      <Search />
    </div>
  )
}


export default DisplayCars