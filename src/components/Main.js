import React from "react";
import {  Link } from "react-router-dom";
import { TripList } from "./Data/TripList";
import Header from './Header';

const Main = () => {
const cards = document.getElementsByClassName('trip-card');

const handleChangeTitle = (e) => {
  let input = e.target.value.toUpperCase()
  SearchTitle(input)
}
const handleChangeDuration = (e) => {
  let input = e.target.value;
  SearchDuration(input)
}
const handleChangeLevel = (e) => {
  let input = e.target.value;
  SearchLevel(input)
}


const SearchTitle = (input) => {
    for(let i=0; i<cards.length; i++)
    {
    let cardtit = cards[i].children[1].children[0].children[0].innerText.toUpperCase();
    if(cardtit.startsWith(input)){
      cards[i].classList.add('showT')
      cards[i].classList.remove('hideT')
    }
    else{
      cards[i].classList.add('hideT')
      cards[i].classList.remove('showT')
      }
    }
}

const SearchDuration = (input) =>{
  for(let i=0; i<cards.length; i++)
  {
    let carddur = cards[i].children[1].children[0].children[1].children[0].innerText.split(' ', 1);
    if(input==='0_x_5'){
      if(carddur[0]<5){
        cards[i].classList.add('showD')
        cards[i].classList.remove('hideD')
      }
      else{
        cards[i].classList.add('hideD')
        cards[i].classList.remove('showD')
        }
    }
    else if(input==='5_x_10'){
      if(carddur[0]>=5 && carddur[0]<10){
        cards[i].classList.add('showD')
        cards[i].classList.remove('hideD')
      }
      else{
        cards[i].classList.add('hideD')
        cards[i].classList.remove('showD')
        }
    }
    else if(input==='10_x'){
      if(carddur[0]>=10){
        cards[i].classList.add('showD')
        cards[i].classList.remove('hideD')
      }
      else{
        cards[i].classList.add('hideD')
        cards[i].classList.remove('showD')
        }
    }
    else if(input===''){
      cards[i].classList.add('showD')
      cards[i].classList.remove('hideD')
    }
    else{
      cards[i].classList.add('hideD')
      cards[i].classList.remove('showD')
      }
  }
}

const SearchLevel = (input) =>{
  for(let i=0; i<cards.length; i++)
  {
    let cardlvl = cards[i].children[1].children[0].children[1].children[1].innerText;
    if(input===cardlvl){
      cards[i].classList.add('showL')
      cards[i].classList.remove('hideL')
    }
    else if (input===''){
    cards[i].classList.add('showL')
    cards[i].classList.remove('hideL')
    }
    else {
    cards[i].classList.add('hideL')
    cards[i].classList.remove('showL')
   }
  }
}


    return(
      <>
      <Header nav={true}/>
      <main>
      <h1 class="visually-hidden">Travel App</h1>
         <section className="trips-filter">
        <h2 className="visually-hidden">Trips filter</h2>
        <form className="trips-filter__form" autocomplete="off">
          <label className="trips-filter__search input">
            <span className="visually-hidden">Search by name</span>
            <input name="search" type="search" placeholder="search by title" 
            onChange={handleChangeTitle}
            />
          </label>
          <label className="select">
            <span className="visually-hidden">Search by duration</span>
            <select name="duration"
            onChange={handleChangeDuration}
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
            onChange={handleChangeLevel}
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
        return(
          <>
          <li className="trip-card" key={key}>
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
        )}
      </ul>
      </section>
    </main>
    </>
          
            
         
    )
  }

export default Main;