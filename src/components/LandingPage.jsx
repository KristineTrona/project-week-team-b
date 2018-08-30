import * as React from 'react'
import { Link } from 'react-router-dom';

export default function WelcomePageText() {
  return (
    <div className="landing-page-container">
        <div className="background-container"> </div>
        <div className='text-wrapper'>
        <div className="app-info"> We offer parents a conscious way of buying kids products. Here you can find a great selection of second hand furnitures/accessories, clothing and toys. Just swipe it!</div>
          <div className= "text left"><p>Minim lomo laboris, taiyaki twee tbh cronut officia fingerstache keytar 
            skateboard. Roof party ennui pour-over banh mi copper mug intelligentsia. 
            Tempor vice elit XOXO aliqua scenester freegan. Fanny pack +1 vinyl beard.</p>
            <Link to={'/sell'} style={{ textDecoration: 'none' }}><button className="btn-landing"  type="button">Sell</button></Link>
          </div>
          <div className = "text right"><p>Minim lomo laboris, taiyaki twee tbh cronut officia fingerstache keytar 
            skateboard. Roof party ennui pour-over banh mi copper mug intelligentsia. 
            Tempor vice elit XOXO aliqua scenester freegan. Fanny pack +1 vinyl beard.</p>
            <Link to={'/shop'} style={{ textDecoration: 'none' }}><button className="btn-landing" type="button">Buy</button></Link>
          </div>
        </div>
    </div>
  )
}