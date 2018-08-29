import * as React from 'react'
import { Link } from 'react-router-dom';
import '../LandingPage.css';
import Logo_1 from '../lib/images/Logo_1.svg'



export default function WelcomePageText() {
  return (
    <div className="container">
        <div className="header">
          <img src={Logo_1} alt="logo"/>
          <div className="title">
            <h1>Kid to Kid</h1>
          </div>
        </div>
      <main className='main'>
        <div className='text-wrapper'>
        <p>Lorem ipsum dolor amet brunch tousled labore, butcher sriracha drinking vinegar aliquip affogato plaid. Man braid chambray sint flannel retro tousled trust fund, cray sartorial. Neutra slow-carb ugh enim proident exercitation, velit hashtag nulla. Ullamco chicharrones godard succulents twee.</p><br />

        <p>Minim lomo laboris, taiyaki twee tbh cronut officia fingerstache keytar skateboard. Roof party ennui pour-over banh mi copper mug intelligentsia. Tempor vice elit XOXO aliqua scenester freegan. Fanny pack +1 vinyl beard.</p><br />

        <p>Esse vegan vaporware heirloom chambray succulents chillwave air plant aute venmo. Ut exercitation +1, VHS iPhone celiac forage portland. Fam man braid cold-pressed put a bird on it wayfarers locavore twee crucifix offal shoreditch try-hard photo booth. Gochujang food truck cold-pressed marfa.</p>
        </div>
        <Link to={'/shop'}><button type="button">Shop!</button></Link>
        <Link to={'/sell'}><button type="button">Sell your items here!</button></Link>
        
      </main>
    
      <footer className="footer">
          <div className= "footer-text" >Contact</div>
      </footer>
    </div>
  )
}