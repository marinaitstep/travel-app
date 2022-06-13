import React, {useState} from "react";
import {  Link } from "react-router-dom";
import { TripList } from "./TripList";
import Header from './Header';

const Main = () => {
const [title, setTitle] = useState('')
const [duration, setDuration] = useState('')
const [level, setLevel] = useState('')

const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
}
const handleChangeDur = (e) => {
  setDuration(e.target.value);
  console.log(duration);
}
const handleChangeLev = (e) => {
  setLevel(e.target.value);
  console.log(level);
}
    return(
      <>
      <Header nav={true}/>
      <main>
         <section className="trips-filter">
        <h2 className="visually-hidden">Trips filter</h2>
        <form className="trips-filter__form" autocomplete="off">
          <label className="trips-filter__search input">
            <span className="visually-hidden">Search by name</span>
            <input name="search" type="search" placeholder="search by title" 
            value = {title}
            onChange={handleChangeTitle}
            />
          </label>
          <label className="select">
            <span className="visually-hidden">Search by duration</span>
            <select name="duration"
            value = {duration}
            onChange={handleChangeDur}
            >
              <option value="">duration</option>
              <option value="0_x_5">&lt; 5 days</option>
              <option value="5_x_10">&lt; 10 days</option>
              <option value="10_x">&ge; 10 days</option>
            </select>
          </label>
          <label class="select">
            <span class="visually-hidden">Search by level</span>
            <select name="level"
            value = {level}
            onChange={handleChangeLev}
            >
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
            let urlid = '/trip/'+data.id; 
            if(title)
            {
              if(data.title.indexOf(title))
              console.log('include')
              else
              console.log('not include')

            }
            if(duration==='0_x_5')
            {
              if(data.duration<5)
              console.log('dur <5')

            }
            if(duration==='5_x_10')
            {
              if(data.duration>=5 && data.duration<10)
              console.log('dur 5<10')

            }
            if(duration==='10_x')
            {
              if(data.duration>=10)
              console.log('dur >=10')

            }
           
              if(data.level===level)
              console.log('leveltrue')

        if(!title && !duration && !level){
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
          <Link to={urlid} className="button">Discover a trip</Link>
          </li>
          </>
        )}
        else return(<></>) 
        })}
      </ul>
      </section>
    </main>
    </>
          
            
         
    )
  }

export default Main;