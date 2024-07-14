import "..//Modals/modal.css";

function DestinationModal({
  handleOutsideClick,
  isOpen,
  item,
  onClose,
  getDirections,
  imagePopup,
  DestinationReviews,
}) {
  return (
    <>
      <div
        onClick={handleOutsideClick}
        className={`modal ${isOpen ? "modal_opened" : ""}`}
      >
        <div className="modal__content">
          <div className="modal__header">
            <h1 className="modal__title">{item.name}</h1>
            <button onClick={onClose} className="modal__close"></button>
          </div>
          <img
            src={item.link}
            alt={item.name}
            className="modal__image"
            // onClick={imagePopup}
          />
          <h2 className="modal__description"> {item.description}</h2>
          {/* possible like button that coordinates with card like button //
        possible carousel in place of img */}
          <section className="modal__directions">
            <button
              onClick={() => {
                getDirections(item);
              }}
              className="modal__gps-button"
            >
              Get Directions
            </button>
            <p className="modal__address">{item.address}</p>
          </section>

          <section className="modal__reviews">
            <DestinationReviews />
          </section>
        </div>
      </div>
    </>
  );
}

export default DestinationModal;
