import "./Cards.css";
const Cards = ({ item, openDestination }) => {
  return (
    <div
      onClick={() => {
        openDestination(item);
      }}
      className="card"
    >
      <img src={item.link} alt={item.name} className="card__image" />
      <h3 className="card__name">{item.name}</h3>
      <p className="card__description">{item.description}</p>
    </div>
  );
};

export default Cards;
