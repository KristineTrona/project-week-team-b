import * as React from 'react'
import { Link } from 'react-router-dom';

export default function WelcomePageText() {
  return (
    <div>
      <header>
        <h1>Some title!</h1>
      </header>
      <main>
        <p>About or something</p>
        <Link to={'/shop'}><button type="button">Shop!</button></Link>
        <Link to={'/sell'}><button type="button">Sell your items here!</button></Link>
      </main>
      <footer>
          <p>Some footer stuff?</p>
      </footer>
    </div>
  )
}