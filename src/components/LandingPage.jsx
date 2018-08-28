import * as React from 'react'
import { Link } from 'react-router-dom';

export default function WelcomePageText() {
  return (
    <div>
      <h1>Welcome to Hangman!</h1>
      <Link to={'/shop'}><button type="button">Shop!</button></Link>
      <Link to={'/sell'}><button type="button">Sell your items here!</button></Link>
    </div>
  )
}