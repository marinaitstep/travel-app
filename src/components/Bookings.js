import React, {useState, useEffect} from "react"
import { BookList } from "./BookList"
import Moment from 'react-moment'
import Header from "./Header"

const Bookings = () => {
  const [arr, setArr] = useState(BookList)
  arr.sort((a, b) => a.date > b.date ? 1 : -1);

  const DelBooking = (e) => {
    const arrDel = []
    arr.map((data, key) => {
    if(data.tripId!=e.target.value){
      arrDel.push(data)
    }
    setArr(arrDel)
    })
  }

    return(
      <>
      <Header nav={true}/>
        <main class="bookings-page">
           <ul class="bookings__list">
          {arr.map((data, key) => {
            
        return(
          <>
          <li class="booking">
            <h3 class="booking__title" key={key}>{data.trip.title}</h3>
            <span class="booking__guests" key={key}>{data.guests} guests</span>
            <span class="booking__date" key={key}><Moment format="DD.MM.YYYY" date={Date.parse(data.date)}/></span>
          <span class="booking__total" key={key}>{data.totalPrice} $</span>
          <button class="booking__cancel" title="Cancel booking" onClick={DelBooking} value={data.tripId}>
            <span class="visually-hidden">Cancel booking</span>
            ×
          </button>
          </li>
          </>
        );  
        })}
      </ul>
    </main>
    </>
    )
}

export default Bookings;