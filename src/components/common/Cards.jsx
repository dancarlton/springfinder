import { useEffect, useState } from 'react'

import { dummyData } from '../../data/dummyData'

const Cards = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const processedData = []

    // extract data from springs
    dummyData.springs.forEach(card => {
      processedData.push({
        name: card.name,
        image: card.image,
        description: card.description,
      })
    })

    // extract data from pools
    dummyData.pools.forEach(card => {
      processedData.push({
        name: card.name,
        image: card.image,
        description: card.description,
      })
    })

    setData(processedData)
  }, [])

  return (
    <div className='card__container'>
      {data.map((item, index) => (
        <div key={index} className='card'>
          <img src={item.image} alt={item.name} className='card__image' />
          <h3 className='card__name'>{item.name}</h3>
          <p className='card__description'>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards
