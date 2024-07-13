const Cards = ({ item }) => {
  return (
    <div className='card'>
      <img src={item.image} alt={item.name} className='card__image' />
      <h3 className='card__name'>{item.name}</h3>
      <p className='card__description'>{item.description}</p>
    </div>
  );
};

export default Cards;
