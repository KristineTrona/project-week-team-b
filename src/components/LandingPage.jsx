import * as React from 'react'
import { Link } from 'react-router-dom';

export default function WelcomePageText() {
  return (
    <div className="landing-page-container">
        <div className="background-container"> </div>
        <div className="app-info"> We offer parents a conscious way of buying kids products. Here you can find a great selection of second hand furnitures/accessories, clothing and toys. Just swipe it!</div>
        <div className='text-wrapper'>
          <div className= "text-left">Lorem ipsum dolor amet brunch tousled labore, butcher sriracha drinking 
            vinegar aliquip affogato plaid. Man braid chambray sint flannel retro tousled 
            trust fund, cray sartorial. Neutra slow-carb ugh enim proident exercitation, velit 
            hashtag nulla. Ullamco chicharrones godard succulents twee.
            <Link to={'/shop'}><button type="button">Shop!</button></Link>
          </div>
          <div className = "text-right">Minim lomo laboris, taiyaki twee tbh cronut officia fingerstache keytar 
            skateboard. Roof party ennui pour-over banh mi copper mug intelligentsia. 
            Tempor vice elit XOXO aliqua scenester freegan. Fanny pack +1 vinyl beard.
            <Link to={'/sell'}><button type="button">Sell your items here!</button></Link>
          </div>
        </div>
      <footer className="footer">
          <div className= "footer-text" >Contact</div>
      </footer>
    </div>
  )
}