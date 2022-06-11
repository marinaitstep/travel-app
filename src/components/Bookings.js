import React from "react";

const Bookings = () => {
    return(
        <main class="bookings-page">
      <h1 class="visually-hidden">Travel App</h1>
      <ul class="bookings__list">
        <li class="booking">
          <h3 class="booking__title">Iceland</h3>
          <span class="booking__guests">2 guests</span>
          <span class="booking__date">13.07.2022</span>
          <span class="booking__total">14000 $</span>
          <button class="booking__cancel" title="Cancel booking">
            <span class="visually-hidden">Cancel booking</span>
            ×
          </button>
        </li>
        <li class="booking">
          <h3 class="booking__title">Iceland</h3>
          <span class="booking__guests">2 guests</span>
          <span class="booking__date">30.09.2022</span>
          <span class="booking__total">14000 $</span>
          <button class="booking__cancel" title="Cancel booking">
            <span class="visually-hidden">Cancel booking</span>
            ×
          </button>
        </li>
        <li class="booking">
          <h3 class="booking__title">Iceland</h3>
          <span class="booking__guests">2 guests</span>
          <span class="booking__date">10.11.2022</span>
          <span class="booking__total">14000 $</span>
          <button class="booking__cancel" title="Cancel booking">
            <span class="visually-hidden">Cancel booking</span>
            ×
          </button>
        </li>
      </ul>
    </main>
    )
}

export default Bookings;