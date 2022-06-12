import React, {useState} from "react"
import Modal from "./Modal";

function Trip (){
 
  const [IsModalOpen, setIsModalOpen] = useState(false);

  const OpenModal = () => {
    setIsModalOpen(true);
  }

  const CloseModal = () => {
    setIsModalOpen(false);
  }

    return(
      <>
        <main className="trip-page">
        <h1 className="visually-hidden">Travel App</h1>
        <div className="trip">
          <img src="../images/iceland.jpg" className="trip__img" alt="trip" />
          <div className="trip__content">
            <div className="trip-info">
              <h3 className="trip-info__title">Iceland</h3>
              <div className="trip-info__content">
                <span className="trip-info__duration"><strong>15</strong> days</span>
                <span className="trip-info__level">easy</span>
              </div>
            </div>
            <div className="trip__description">
              An island is a body of land surrounded by water. Continents are also surrounded by
              water, but because they are so big, they are not considered islands. Australia, the
              smallest continent, is more than three times the size of Greenland, the largest island.
              There are countless islands in the ocean, lakes, and rivers around the world. They vary
              greatly in size, climate, and the kinds of organisms that inhabit them.
            </div>
            <div className="trip-price">
              <span>Price</span>
              <strong className="trip-price__value">7000 $</strong>
            </div>
            <button onClick={OpenModal} className="trip__button button">Book a trip</button>
          </div>
        </div>
      </main>
      {IsModalOpen && <Modal>
        <div>
    <div className="modal" >
      <div className="trip-popup">
        <button onClick={CloseModal} className="trip-popup__close">×</button>
        <form className="trip-popup__form" autocomplete="off">
          <div className="trip-info">
            <h3 className="trip-info__title">Iceland</h3>
            <div className="trip-info__content">
              <span className="trip-info__duration"><strong>15</strong> days</span>
              <span className="trip-info__level">easy</span>
            </div>
          </div>
          <label className="trip-popup__input input">
            <span className="input__heading">Date</span>
            <input name="date" type="date" required />
          </label>
          <label className="trip-popup__input input">
            <span className="input__heading">Number of guests</span>
            <input name="guests" type="number" min="1" max="10" value="1" required />
          </label>
          <span className="trip-popup__total">
            Total: <output className="trip-popup__total-value">4000$</output>
          </span>
          <button className="button" type="submit">Book a trip</button>
        </form>
      </div>
    </div>
  </div>
  </Modal>
  }
     
      </>
    )
}

export default Trip;