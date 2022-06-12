import React from "react";
import {  Link } from "react-router-dom";
import { TripList } from "./TripList";

const Main = () => {
    return(
      <main>
         <section className="trips-filter">
        <h2 className="visually-hidden">Trips filter</h2>
        <form className="trips-filter__form" autocomplete="off">
          <label className="trips-filter__search input">
            <span className="visually-hidden">Search by name</span>
            <input name="search" type="search" placeholder="search by title" />
          </label>
          <label className="select">
            <span className="visually-hidden">Search by duration</span>
            <select name="duration">
              <option value="">duration</option>
              <option value="0_x_5">&lt; 5 days</option>
              <option value="5_x_10">&lt; 10 days</option>
              <option value="10_x">&ge; 10 days</option>
            </select>
          </label>
          <label class="select">
            <span class="visually-hidden">Search by level</span>
            <select name="level">
              <option value="">level</option>
              <option value="easy">easy</option>
              <option value="moderate">moderate</option>
              <option value="difficult">difficult</option>
            </select>
          </label>
        </form>
      </section>
      <section className="trips">

      <ul className="trip-list">
          {TripList.map((data, key) => {
        return(
          <>
          <li className="trip-card">
            <img key={key} src={data.image} alt="trip" />
            <div className="trip-card__content">
              <div className="trip-info">
                <h3 className="trip-info__title" key={key}>{data.title}</h3>
                <div className="trip-info__content">
                  <span className="trip-info__duration" key={key}><strong>{data.duration}</strong> days</span>
                  <span className="trip-info__level" key={key}>{data.level}</span>
                </div>
              </div>
            <div className="trip-price">
              <span>Price</span>
              <strong className="trip-price__value" key={key}>{data.price} $</strong>
            </div>
          </div>
          <Link to="/trip" className="button">Discover a trip</Link>
          </li>
          </>
        );  
        })}
      </ul>
      </section>
    </main>
        
          
            
         
    )
  }

export default Main;