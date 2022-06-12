import React from "react";
import { BookList } from "./BookList";

const Bookings = () => {
    return(
        <main class="bookings-page">
           <ul class="bookings__list">
          {BookList.map((data, key) => {
        return(
          <>
          <li class="booking">
            <h3 class="booking__title" key={key}>{data.trip.title}</h3>
            <span class="booking__guests" key={key}>{data.guests} guests</span>
            <span class="booking__date" key={key}>{data.date.split('T')[0]}</span>
          <span class="booking__total" key={key}>{data.totalPrice} $</span>
          <button class="booking__cancel" title="Cancel booking">
            <span class="visually-hidden">Cancel booking</span>
            ×
          </button>
          </li>
          </>
        );  
        })}
      </ul>
    </main>
    )
}

export default Bookings;