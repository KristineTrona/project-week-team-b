import * as React from 'react'
import { Link } from 'react-router-dom';

export default function WelcomePageText() {
  return (
    <div className="landing-page-container">
        <div className="background-container"> </div>
        <div className='text-wrapper'>
        <div className="app-info"> We offer parents a fantastic way of getting rid of kids’ products that are not being used anymore. And for the new parents, we found a conscious way of buying kids products. Here you can find a great selection of second hand furniture/accessories, clothing and toys. Just swipe it!</div>
          <div className= "text left"><p>Time flies… Your kid grew up but you still have a lots of those adorable things laying around, right? Sell them now and make great deals!<br /><br /></p>
            <Link to={'/sell'} style={{ textDecoration: 'none' }}><button className="btn-landing"  type="button">Sell</button></Link>
          </div>
          <div className = "text right"><p>By now you figured out it is not worth paying that much for something your child will use few times, right? Check out what our sellers have to offer, there are some great deals. Just swipe it!</p>
            <Link to={'/shop'} style={{ textDecoration: 'none' }}><button className="btn-landing" type="button">Buy</button></Link>
          </div>
        </div>
    </div>
  )
}