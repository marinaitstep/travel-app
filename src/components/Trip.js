import React, {useState} from "react"
import Modal from "./Modal";
import Header from "./Header";
import { TripList } from "./Data/TripList";

function Trip (props){
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const [guests, setGuests] = useState(1);
  const curDate = new Date().toISOString().split('T')[0];

  const OpenModal = () => {
    setIsModalOpen(true);
  }

  const CloseModal = () => {
    setIsModalOpen(false);
  }

  const handleChangeGuest = (e) => {
    setGuests(e.target.value);
  }

  return(<>
  {TripList.map((data, key) => {
    if(data.id===props.match.params.tripId)
    return(
      <>
        <Header nav={true}/>
        <main className="trip-page">
        <h1 className="visually-hidden">Travel App</h1>
        <div className="trip">
        <img key={key} src={data.image} className="trip__img" alt="trip" />
          <div className="trip__content">
            <div className="trip-info">
              <h3 className="trip-info__title" key={key}>{data.title}</h3>
              <div className="trip-info__content">
                <span className="trip-info__duration" key={key}><strong>{data.duration}</strong> days</span>
                <span className="trip-info__level" key={key}>{data.level}</span>
              </div>
            </div>
            <div className="trip__description" key={key}>
              {data.description}
            </div>
            <div className="trip-price">
              <span>Price</span>
              <strong className="trip-price__value" key={key}>{data.price} $</strong>
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
            <h3 className="trip-info__title" key={key}>{data.title}</h3>
            <div className="trip-info__content">
              <span className="trip-info__duration" key={key}><strong>{data.duration}</strong> days</span>
              <span className="trip-info__level" key={key}>{data.level}</span>
            </div>
          </div>
          <label className="trip-popup__input input">
            <span className="input__heading">Date</span>
            <input name="date" type="date" required min={curDate}/>
          </label>
          <label className="trip-popup__input input">
            <span className="input__heading">Number of guests</span>
            <input name="guests" type="number" min="1" max="10" required 
            value = {guests}
            onChange={handleChangeGuest}
            />
          </label>
          <span className="trip-popup__total">
            Total: <output className="trip-popup__total-value" key={key}>{data.price*guests}$</output>
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
    else return (<></>)
  })}
  </>
  )
}

export default Trip;