import React, { useEffect, useState } from 'react'

import { dummyData } from '../../data/dummyData'

const cardComponent = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const processedData = []
    dummyData.forEach(card)
  })
}


const Cards = () => {
  return (
    <div className='container'>
      <div className='card'></div>
    </div>
  )
}

export default Cards
