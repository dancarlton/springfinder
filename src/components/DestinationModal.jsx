import "../blocks/modal.css";

function DestinationModal({
  handleOutsideClick,
  activeModal,
  item,
  onClose,
  imagePopup,
  DestinationReviews,
}) {
  return (
    <div
      onClick={handleOutsideClick}
      className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}
    >
      <div className="modal__content">
        <div className="modal__header">
          <h1 className="modal__title">{item.name}</h1>
          <button onClick={onClose} className="modal__close">
            CLOSE
          </button>
        </div>
        <img
          src={item.link}
          alt={item.name}
          className="modal__image"
          onClick={imagePopup}
        />
        //possible like button that coordinates with card like button //
        possible carosel
        <button className="modal__gps-button">Get Directions</button>
        <h2 className="modal__description"> {item.description}</h2>
        <section className="modal__reviews">
          <DestinationReviews />
          // Section Title + add review button + carosel with user pics + user
          reviews
        </section>
      </div>
    </div>
  );
}

export default DestinationModal;
